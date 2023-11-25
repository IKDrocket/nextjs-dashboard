import { Metadata } from 'next';

import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <Suspense key={query} fallback={<div />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}
