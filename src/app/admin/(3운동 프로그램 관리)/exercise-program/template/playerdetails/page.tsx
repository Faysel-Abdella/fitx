import Header from '@/components/Header'
import ProfilePreview from '@/components/ProfilePreview'
import React from 'react'

const pages = () => {
  return (
    <div>
      <Header title='프로그램 구성'/>
      <div className='mt-5'>
        <ProfilePreview imageSrc='/Profile.svg' name='이재은 선수' stats={[
    { label: "스쿼트", weight: "280kg" },
    { label: "벤치프레스", weight: "145kg" },
    { label: "데드리프트", weight: "329kg" },
  ]}/>
      </div>
    </div>
  )
}

export default pages