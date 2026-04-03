import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/CheckUser';

const Header = async () => {
  await checkUser();

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <h2 className="text-lg font-bold tracking-tight">💸 Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
