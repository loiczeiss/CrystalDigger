import React from 'react'
import Tales from '../assets/tales.png'

function Enter() {
  return (
    <>
    <main className='h-full'>
        <section className='flex h-2/3 justify-center items-center	'>
        <img src={Tales} alt="CrystalDiggerLogo" className=''  />

        </section>
        <section className='flex h-1/3 justify-center items-start'>
            <button className='border-2	border-black w-48 h-20 text-3xl'>Enter</button>
        </section>
    </main>
    </>
  )
}

export default Enter