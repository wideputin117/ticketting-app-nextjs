// dynamic page 

import { getEventById } from '@/lib/action/event.actions'
import { SearchParamProps } from '@/public/types'
import React from 'react'

const EventDetails =async ({ params:{ id }}: SearchParamProps) => {
    const event = await getEventById(id);
    console.log(event);
    return(
        <>
           <section className='flex justify-center bg-primary-50 bg-dotted-pattern'>

           </section>
        
        </>
    )
} 

export default EventDetails;