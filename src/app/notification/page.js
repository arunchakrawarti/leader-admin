import NotificationTable from '@/components/pages/notification/NotificationTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <NotificationTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
