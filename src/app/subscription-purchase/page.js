import SubscriptionTable from '@/components/pages/subscription-purchase/SubscriptionTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
