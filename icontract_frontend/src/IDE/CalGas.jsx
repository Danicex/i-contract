import React from 'react'
import { X } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function CalGas({setGas}){
  return (
<Card className="w-full max-w-md px-2 py-4">         
<p className='float-end' onClick={()=>setGas(false)}><X /></p>
      gas calculator
</Card>
  )
}
