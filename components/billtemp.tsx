import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { CalendarForm } from './ui/billdate'


const Billtemp = () => {
  return (
  <>
  <div className='md:w-[900px] text-center flex flex-col justify-center items-center'>
    <h1 className="font-bold md:text-4xl ">
    Create Your Bill in 3 steps
    </h1>
   <div className='grid grid-cols-2 gap-6 mt-12 min-h-[60px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-500 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",'>
    
   <Input type='text' placeholder='Bill Name' className='w-60 '/>
   <Input type='text' placeholder='Invoice No.' className='w-60 '/>
   <CalendarForm/>
   <Input type='file' placeholder='Upload Logo' className='w-60 '/>
 


   <div>
   <h1 className='text-start font-bold mb-3 text-lg'>Your Details</h1>
   <Input type='text' placeholder='Bill Name' className='w-60 mb-4'/>
   <Input type='text' placeholder='Invoice No.' className='w-60 mb-4'/>

   <Input type='file' placeholder='Upload Logo' className='w-60 mt-4'/>
  
   </div>

   <div className=''>
   <h1 className='text-start font-bold mb-3 text-lg'>Client Details</h1>
   <Input type='text' placeholder='Bill Name' className='w-60 mb-4'/>
   <Input type='text' placeholder='Invoice No.' className='w-60 mb-4'/>
   
   <Input type='file' placeholder='Upload Logo' className='w-60 mt-4'/>
  
   </div>

      
  
   </div>

  </div>
  
  </>
  )
}

export default Billtemp