import React from 'react';
import {Route ,Link, Routes} from 'react-router-dom'
// npm install react-router-dom 

import {Home} from './Home'
import {Customers} from './Customers'
import {Login} from './Login'
import Cars from './Cars'
import {CarDetails} from './CarDetails'
import {Greet} from './Greet'

export const Layout = () => (  
  <div>
    <nav >
      <Link className="nav"  exact to='/'>Home</Link>
      <Link className="nav"  exact to='/users'>Customers</Link>
      <Link className="nav"  exact to='/cars'>Cars</Link>
      <Link className="nav"  exact to='/login'>Login</Link>    

      <Link className="nav" exact to="/greet/Murthy">Greet</Link>
        </nav>

    <main className="container">
      <Routes>       
  
      <Route path="/" exact element={<Home/>} />     
      <Route path="/users" element={<Customers/>}  />
      <Route path="/login" element={<Login/>} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/carDetails/:carId" element={<CarDetails/>}/>    
      <Route path='/greet/:username' 
            render={(props) => (<Greet {...props} />)}/>
        <Route element={<NotFound/>}/>
     </Routes>
      </main>
  </div>
)
const NotFound= () => <h1>Sorry... there is no matching route</h1>