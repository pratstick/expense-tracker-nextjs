import { Transaction } from '@/types/Transaction';
import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return (
      <p className="mt-4 rounded bg-red-500 px-3 py-2 text-sm text-white">
        {error}
      </p>
    );
  }

  return (
    <>
      <h3 className="mt-10 mb-3 border-b border-gray-300 pb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
        History
      </h3>
      {transactions && transactions.length > 0 ? (
        <ul className="mb-10 flex flex-col gap-2 list-none p-0">
          {transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <p className="py-6 text-center text-sm text-gray-400">
          No transactions yet. Add one above!
        </p>
      )}
    </>
  );
};

export default TransactionList;
