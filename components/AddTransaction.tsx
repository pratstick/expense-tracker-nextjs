'use client';

import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transaction added successfully!');
      formRef.current?.reset();
    }
  };

  return (
    <>
      <h3 className="mt-10 mb-3 border-b border-gray-300 pb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Add Transaction
      </h3>
      <form ref={formRef} action={clientAction} className="w-full">
        <div className="mb-3">
          <label
            htmlFor="text"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="e.g. Coffee, Salary…"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Amount
            <span className="ml-1 text-xs text-gray-400">
              (negative = expense, positive = income)
            </span>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="e.g. -50 or 1500"
            step="0.01"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-brand py-2.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
