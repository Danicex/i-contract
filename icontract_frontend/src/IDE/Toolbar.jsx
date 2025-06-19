import { useMyContext } from '@/Context/AppContext'
import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function Toolbar({setShare, setTest, setGas, gas, test, share}) {
  const { projectInfo} = useMyContext();
  const [open, setOpen] = useState(false)

  return (
    <div className='px-4 pt-2'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='capitalize font-bold text-l'>{projectInfo.name}</p>
          <p className='text-gray-500'>{projectInfo.date}</p>
        </div>

        <button className='p-0' onClick={() => setOpen(!open)}>{open ? 
          <ChevronUp /> 
          : 
          <ChevronDown />
          }</button>

      </div>
      {open && (
        <div className='flex gap-5 my-4 c'>
          <button  className='bg-gray-600 p-2 hover:bg-gray-400 rounded-md apitalize' onClick={()=>setShare(!share)}>Share Project</button>
          <button className='bg-gray-600 p-2 hover:bg-gray-400 rounded-md apitalize' onClick={()=>setTest(!test)}>Test</button>
          <button className='bg-gray-600 p-2 hover:bg-gray-400 rounded-md apitalize' onClick={()=>setGas(!gas)}>Calculate Gas</button>
        </div>
      )}

    </div>
  )
}
