import SubscriptionPlanTable from '@/components/pages/subscription-plan/SubscriptionPlanTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionPlanTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
