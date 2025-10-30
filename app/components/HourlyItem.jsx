import Image from 'next/image'
import React from 'react'


const HourlyItem = ({icon,time,degree}) => {
  return (
   <div className="  flex justify-between items-center bg-neutral-700 py-2 p-5 rounded-2xl border border-neutral-600 ">
                     <div className="flex justify-start items-center gap-2">
                       <Image
                         src={icon}
                         alt="sunny icon"
                         width={40}
                         height={40}
                       />
                       <h4 className="">{time}</h4>
                     </div>
                     <div className="flex items-center">
                       <h4 className="">
                         {degree}
                         <span className="align-top pl-1">°</span>
                       </h4>
                     </div>
                   </div>
  )
}

export default HourlyItem