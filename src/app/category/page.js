import CategoryTable from '@/components/pages/category/CategoryTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
<Suspense fallback={<div>Loading..</div>}>
        <CategoryTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
