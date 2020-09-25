
import React from 'react'

export const Page = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
         <section className="flex justify-center items-center h-full bg-gray-300">
            <h1 className="text-2xl md:text-5xl my-0">This is the ContactPage</h1>
         </section>
         <aside
            className="h-full"
            style={{
               backgroundImage: `url(https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
            }}
         ></aside>
      </div>
   )
}
