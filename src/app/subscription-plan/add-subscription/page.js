import AddSunscription from '@/components/pages/subscription-plan/AddSunscription'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddSunscription/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
