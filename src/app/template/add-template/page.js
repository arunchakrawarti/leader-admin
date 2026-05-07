import AddTemplate from '@/components/pages/template/AddTemplate'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddTemplate/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
