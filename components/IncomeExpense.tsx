import getIncomeExpense from '@/app/actions/getIncomeExpense';
import { addCommas } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  const displayIncome = addCommas(Number((income ?? 0).toFixed(2)));
  const displayExpense = addCommas(Number((expense ?? 0).toFixed(2)));

  return (
    <div className="flex divide-x divide-gray-200 rounded bg-white shadow-card">
      <div className="flex-1 py-4 text-center">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Income
        </h4>
        <p className="mt-1 text-xl font-semibold tracking-wide text-green-600">
          ₹{displayIncome}
        </p>
      </div>
      <div className="flex-1 py-4 text-center">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Expense
        </h4>
        <p className="mt-1 text-xl font-semibold tracking-wide text-red-600">
          ₹{displayExpense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
