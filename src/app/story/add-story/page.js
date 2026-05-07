import AddStory from '@/components/pages/story/AddStory'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddStory/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
