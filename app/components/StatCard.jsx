import React from 'react'

const StatCard = ({properties,value}) => {
  return (
    <div className="w-1/4 border border-neutral-600 bg-neutral-800 rounded-2xl px-4 pt-4 pb-3 flex flex-col justify-around gap-8">
                <h2 className="font-light">{properties}</h2>

                <h3 className="text-2xl font-light">
                  {value}
                  <span className="align-top text-3xl not-italic pl-1">°</span>
                </h3>
              </div>
  )
}

export default StatCard