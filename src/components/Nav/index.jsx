import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class Nav extends Component {
    state = {
        nav: ''
    }
    handleBuger(event) {
        const navMenu = document.querySelector(".nav-menu")
        const navMenuItems = document.querySelectorAll(".nav-menu li")
        event.target.classList.toggle("active")
        navMenu.classList.toggle("open")
        navMenuItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ""
            } else {
                item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 + 0.3}s`
            }
        })
    }
    render() {
        let token1 = PubSub.subscribe('nav-admin',(msg, data) => {
           this.setState({nav:data})
        })
        console.log(this.state.nav)
        return (    
            <nav>
          <div className="logo"><NavLink className='logo-link' to="/">Xt's font Blog</NavLink></div>
            <ul className="nav-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/signin">Signin</NavLink></li>
                {this.state.nav && <li><NavLink to="/admin/articleedit">write-art</NavLink></li>}
            </ul>
            <div className="burger" onClick={this.handleBuger}>
                <div className="top-line"></div>
                <div className="middle-line"></div>
                <div className="bottom-line"></div>
            </div>
        </nav>
        )
    }
}
