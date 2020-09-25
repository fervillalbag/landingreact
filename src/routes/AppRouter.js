
import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { About } from '../components/about';
import { Home } from '../components/home';
import { Works } from '../components/works';
import { Contact } from '../components/contact';
import { Navbar } from '../components/navbar';

export const AppRouter = () => {
   return (
      <>
         <Router>
            <div>
               <Navbar />

               <Switch>

                  <Route
                     exact
                     path="/"
                     component={Home}
                  />

                  <Route
                     exact
                     path="/about"
                     component={About}
                  />

                  <Route
                     exact
                     path="/works"
                     component={Works}
                  />

                  <Route
                     exact
                     path="/contact"
                     component={Contact}
                  />

                  <Redirect
                     to="/"
                  />

               </Switch>
            </div>
         </Router>
      </>
   )
}
