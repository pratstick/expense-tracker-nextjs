import { Suspense } from 'react';
import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';

/** Inline skeleton helpers — kept local to avoid extra files. */
function BalanceSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      <div className="h-3 w-24 rounded bg-gray-300" />
      <div className="h-10 w-36 rounded bg-gray-300" />
    </div>
  );
}

function IncomeExpenseSkeleton() {
  return (
    <div className="flex divide-x divide-gray-200 rounded bg-white shadow-card">
      {[0, 1].map((i) => (
        <div key={i} className="flex-1 animate-pulse py-4 text-center">
          <div className="mx-auto mb-2 h-3 w-14 rounded bg-gray-200" />
          <div className="mx-auto h-6 w-20 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

function TransactionListSkeleton() {
  return (
    <div className="mt-10 space-y-2">
      <div className="mb-3 h-4 w-20 rounded bg-gray-300" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-12 animate-pulse rounded bg-gray-200" />
      ))}
    </div>
  );
}

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Welcome back, {user.firstName}!
      </h2>

      <Suspense fallback={<BalanceSkeleton />}>
        <Balance />
      </Suspense>

      <Suspense fallback={<IncomeExpenseSkeleton />}>
        <IncomeExpense />
      </Suspense>

      <AddTransaction />

      <Suspense fallback={<TransactionListSkeleton />}>
        <TransactionList />
      </Suspense>
    </div>
  );
};

export default HomePage;
