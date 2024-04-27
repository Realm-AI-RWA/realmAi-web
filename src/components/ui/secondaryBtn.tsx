import React from 'react'

function SecondaryBtn({id, title}: {id?:string, title:string}) {
  return (
    <div id={id} className=' flex justify-center items-center py-[0.75rem] px-[0.5rem] border-[2px] border-black bg-white font-Bricolage text-[2rem] text-[#020301] font-bold shadow-secondary_shadow w-fit'>
      {title}
    </div>
  )
}

export default SecondaryBtn
