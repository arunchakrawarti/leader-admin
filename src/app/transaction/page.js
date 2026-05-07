import TransactionTable from '@/components/pages/transaction/TransactionTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <TransactionTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
