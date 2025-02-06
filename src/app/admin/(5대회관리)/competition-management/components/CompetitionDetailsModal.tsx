import Image from 'next/image'
import React from 'react'
import { EventCard } from './event-card'

const CompetitionDetailsModal = () => {
  return (
    <div className='flex max-h-screen overflow-y-auto scrollbar-hide flex-col space-y-3 p-10 bg-white rounded-'>
         <p className='text-[#4D4D4D] font-bold text-[30px]'>대회 내용</p>
         <Image src={'/roaster.svg'} width={360} height={300} alt=''/>
         <div>
         <EventCard
        date="2025년 04월 01일"
        daysLeft={17}
        title="2024 USAPL KOREA"
        subtitle="Dr. Strength Spring Classic"
        location="서울특별시 성북구 닥터스트랭스"
        details={{
          competitionId: "장비 점검 B 230-231",
          registrationTime: "조기 장비 점검 목요일 오후 4시 30분-5시 30분",
          registrationNote:
            "다른 모든 장비 점검은 계체량 30분 전에 시작됩니다. 라프팅 세션에 참가할 예정인 선수들만 이 장비 점검에 참여할 수 있습니다.",
          measurementNote:
            "체중 측정 및 체중 확인 저울 B 230-231체중 측정은 예정된 각 세션 시작 2시간 전에 시작되어 1.5시간 동안 지속됩니다. 체중 측정 세종계는 체중 측정 시간과 위에 게시된 동록 시간 동안 이용 가능합니다.",
        }}
      />
         </div>
    </div>
  )
}

export default CompetitionDetailsModal