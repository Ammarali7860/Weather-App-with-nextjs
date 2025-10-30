import Image from 'next/image'
import React from 'react'


const DailyCard = ({day,weatherIcon,maxvalue,minValue}) => {
  return (
       <div className="border border-neutral-600 flex flex-col items-center gap-2 bg-neutral-800 rounded-2xl px-4 pt-4 pb-3">
                      <h4 className="  ">{day}</h4>
    
                      <Image
                        src={weatherIcon}
                        alt="Rainicon"
                        width={50}
                        height={50}
                      />
                      <div className="flex gap-4">
                        <h4 className="text-[12px]  ">
                          {maxvalue}
                          <span className="align-top pl-1">°</span>
                        </h4>
                        <h4 className="text-[12px]  ">
                          {minValue}
                          <span className="align-top pl-1">°</span>
                        </h4>
                      </div>
                    </div>
  )
}

export default DailyCard