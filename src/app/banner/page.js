import Banner from '@/components/pages/banner/Banner'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Banner/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
