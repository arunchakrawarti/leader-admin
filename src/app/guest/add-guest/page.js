import AddGuest from '@/components/pages/guest/AddGuest'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddGuest/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
