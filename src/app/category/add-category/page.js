import AddCategory from '@/components/pages/category/AddCategory'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddCategory/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
