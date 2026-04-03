import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses, and easily manage your budget!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-sans">
          <Header />
          <main className="mx-auto w-full max-w-md px-4 py-8">{children}</main>
          <ToastContainer position="bottom-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}

