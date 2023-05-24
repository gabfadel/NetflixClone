import Image from 'next/image'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'

export async function getServerSideProps(context:NextPageContext){
  const session= await getSession(context);

  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent:false,
      }
    }
  }
  return{
    props:{}
  }
}

export default function Pages() {
  return (
   <><h1 className='text-4xl text-green-500'>Netflix Clone</h1>
   <button className='h-10 w-full bg-white' onClick={()=> signOut()}> sign Out!</button>
   </>
  )
}
