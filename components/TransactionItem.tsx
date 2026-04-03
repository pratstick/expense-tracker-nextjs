'use client';
import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const isIncome = transaction.amount >= 0;
  const sign = isIncome ? '+' : '-';

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this transaction?'
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
    }
  };

  return (
    <li
      className={`group relative flex items-center justify-between bg-white shadow-card rounded px-4 py-3 ${
        isIncome ? 'border-r-4 border-green-500' : 'border-r-4 border-red-600'
      }`}
    >
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        aria-label={`Delete transaction: ${transaction.text}`}
        className="absolute -left-0 top-1/2 -translate-x-full -translate-y-1/2 bg-red-500 text-white text-lg leading-none px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
      >
        🗑
      </button>
      <span className="text-gray-700">{transaction.text}</span>
      <span
        className={`font-semibold tracking-wide ${
          isIncome ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {sign}₹{addCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};

export default TransactionItem;
