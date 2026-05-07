import AddNotification from '@/components/pages/notification/AddNotification'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddNotification/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
