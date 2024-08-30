'use client'

import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function WelcomePage() {
  const { data: session } = useSession();
  

  useEffect(() => {
    if (!session) {
      redirect('/login');
    }
    console.log(session);
  }, [session]);

  return (
    <div>
      <Navbar session={session}></Navbar>
      <div className="container mx-auto">
        <h3 className='text-3xl my-3'>Welcome User {session?.user?.name}</h3>
        <p>Email: {session?.user?.email}</p>
        <hr className='my-3' />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi assumenda temporibus eaque, sunt fugit odio natus illum minus ullam nisi rerum quasi porro nulla ipsum perspiciatis saepe eos obcaecati nemo?</p>
      </div>
    </div>
  )
}

export default WelcomePage
