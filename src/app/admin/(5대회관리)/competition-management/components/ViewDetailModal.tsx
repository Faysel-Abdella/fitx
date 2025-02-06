import React from 'react'

const ViewDetailModal = () => {
  return (
    <div className='flex flex-col space-y-10 p-10 bg-white rounded-[20px]'>
        <p className='text-[#4D4D4D] font-bold text-[30px]'>참여 회원</p>
        <div className='flex flex-col space-y-[10px]'>
            <div className='flex justify-between items-center p-[10px] border-b-1 border-[#DCDCDC]'>
                <div className='flex flex-col gap-[4px]'>
                    <p className='text-[#404040] text-[18px]'>이재은</p>
                    <p className='text-[#9D9D9D] text-sm'>신청일 : 2025.08.03</p>
                </div>
                <p className='text-[#248DEE] font-bold text-[18px]'>대한민국</p>
            </div>
            <div className='flex justify-between items-center p-[10px] border-b-1 border-[#DCDCDC]'>
                <div className='flex flex-col gap-[4px]'>
                    <p className='text-[#404040] text-[18px]'>Lucy Brown</p>
                    <p className='text-[#9D9D9D] text-sm'>신청일 : 2025.08.02</p>
                </div>
                <p className='text-[#248DEE] font-bold text-[18px]'>영국</p>
            </div>
            <div className='flex justify-between items-center p-[10px]'>
                <div className='flex flex-col gap-[4px]'>
                    <p className='text-[#404040] text-[18px]'>Mia Scott</p>
                    <p className='text-[#9D9D9D] text-sm'>신청일 : 2025.08.01</p>
                </div>
                <p className='text-[#248DEE] font-bold text-[18px]'>캐나다</p>
            </div>
        </div>
    </div>
  )
}

export default ViewDetailModal