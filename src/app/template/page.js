import TamplateTable from '@/components/pages/template/TamplateTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <TamplateTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
