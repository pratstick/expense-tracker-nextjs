import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 text-6xl">💸</div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Welcome to Expense Tracker
      </h1>
      <p className="mb-8 max-w-sm text-gray-500">
        Sign in to start tracking your income and expenses in one place.
      </p>
      <SignInButton>
        <button className="rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
          Sign In to Get Started
        </button>
      </SignInButton>
    </div>
  );
};

export default Guest;
