import StoryTable from '@/components/pages/story/StoryTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <StoryTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
