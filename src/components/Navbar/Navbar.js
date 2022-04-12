import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
              <link to='/' className='navbar-logo'></link>
              <div className='menu-icon'onClick={this.handleClick}>
                   <i className={this.state.clicked ? "fas fa-xmark" : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                        <Link to={item.url} style={{ textDecoration: 'none' }}>
                            <a className={item.cName} >
                            {item.title}
                          </a>
                        </Link>
                         
                        </li>
                    )
                })}
                    
                </ul>
            </nav>
            
        )
    }
}

export default Navbar