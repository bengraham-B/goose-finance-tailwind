import React from 'react'

export default function Header() {
  return (
    <nav className='relative bg-blue-700 text-white'>

        <main className='flex flex-row xsm:h-24 md:h-32 items-center justify-between p-6 mx-2'>

            <div id="logo" className='flex xsm:h-16 md:h-28 xsm:w-4/12 md:w-4/12'>
                <img src="./img/logo.png" alt="" srcset="" className='object-contain'/>
            </div>

            <div id='title' className='xsm:w-8/12 md:w-4/12'>
                <h2 className='xsm:text-xl sm:text-2xl md:text-4xl sm:text-end md:text-center'>Finace App For Gooses</h2>
            </div>

            <div id="menu" className='xsm:hidden sm:hdden md:block flex flex-row md:text-xl text-2xl md:w-4/12 text-end'>
                <a href="#" className='hover:text-orange-500 mx-2'>Menu</a>
                <a href="#" className='hover:text-orange-500 mx-2'>About Us</a>
                <a href="#" className='hover:text-orange-500 mx-2'>Contribute</a>
            </div>

        </main>

    </nav>
  )
}
