import React from 'react'
import LeftNav from './LeftNav'

const ChannelDetails = () => {
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className='grow w-[calc[100%-240px)] h-full overflow-y-auto bg-black text-white'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          Channel
        </div>  
      </div>
    </div>
  )
}

export default ChannelDetails

