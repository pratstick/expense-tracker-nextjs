'use server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const transactionSchema = z.object({
  text: z.string().min(1, 'Description is required').max(100, 'Description must be 100 characters or fewer'),
  amount: z
    .preprocess(
      (val) => (typeof val === 'number' && isNaN(val) ? undefined : val),
      z
        .number({ error: 'Amount must be a valid number' })
        .finite('Amount must be a finite number')
        .refine((v) => v !== 0, { message: 'Amount cannot be zero' })
    ),
});

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  const parsed = transactionSchema.safeParse({
    text: textValue?.toString() ?? '',
    amount: parseFloat(amountValue?.toString() ?? ''),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { text, amount } = parsed.data;

  const { userId } = auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: { text, amount, userId },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    return { error: 'Transaction not added' };
  }
}

export default addTransaction;
