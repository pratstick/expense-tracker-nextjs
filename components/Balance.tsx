import getUserBalance from '@/app/actions/getUserBalance';
import { addCommas } from '@/lib/utils';

const Balance = async () => {
  const { balance } = await getUserBalance();
  const displayBalance = addCommas(Number((balance ?? 0).toFixed(2)));
  const isNegative = (balance ?? 0) < 0;

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        Your Balance
      </p>
      <h1
        className={`text-4xl font-bold tracking-tight ${
          isNegative ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        ₹{displayBalance}
      </h1>
    </>
  );
};

export default Balance;
