import Addbanner from '@/components/pages/banner/Addbanner'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Addbanner/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
