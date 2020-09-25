
import React from 'react'

export const Page = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
         <section className="flex justify-center items-center h-full bg-gray-300">
            <h1 className="text-2xl md:text-5xl my-0">This is the AboutPage</h1>
         </section>
         <aside
            className="h-full"
            style={{
               backgroundImage: `url(https://images.pexels.com/photos/4289699/pexels-photo-4289699.png?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
            }}
         ></aside>
      </div>
   )
}
