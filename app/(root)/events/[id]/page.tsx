// dynamic page 

import { getEventById } from '@/lib/action/event.actions'
import { SearchParamProps } from '@/public/types'
import React from 'react'

const EventDetails =async ({params:{ id }}: SearchParamProps) => {
    const event = await getEventById(id);
    return(
        <>
          <div>
            My details
          </div>
        
        </>
    )
} 

export default EventDetails;