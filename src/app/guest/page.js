import GuestTable from '@/components/pages/guest/GuestTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading..</div>}>
        <GuestTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
