
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Page = () => {
   return (
      <div className="bg-green-700 py-5 fixed w-full">
         <div className="container mx-auto flex justify-center md:justify-end">
            <NavLink
               activeClassName="active"
               className="text-white mr-5"
               exact
               to="/"
            >
               Home
         </NavLink>

            <NavLink
               activeClassName="active"
               className="text-white mr-5"
               exact
               to="/about"
            >
               About
         </NavLink>

            <NavLink
               activeClassName="active"
               className="text-white mr-5"
               exact
               to="/works"
            >
               Works
         </NavLink>

            <NavLink
               activeClassName="active"
               className="text-white"
               exact
               to="/contact"
            >
               Contact
         </NavLink>
         </div>
      </div>
   )
}
