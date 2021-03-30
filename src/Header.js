import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';
//import StickyHeader from 'react-sticky-header';


const Header = () => {


    return (
        <div className="h">
              <div className="deg-pro-me">


<ul className = "list">

<NavLink className="Ourstory" to ="/Ourstory">Our Story </NavLink>   

<NavLink className ="Membership" to ="/Membership">Membership</NavLink> 

<NavLink className ="Write" to ="/Write"> Write </NavLink>

<NavLink className ="Signin" to ="/Signin"> Sign in</NavLink>

<NavLink className ="Start" to ="/Start"> Get Start </NavLink>

<NavLink className ="Medium" to ="/"> Medium </NavLink>

</ul>


</div >

        </div>
    )
}

export default Header
