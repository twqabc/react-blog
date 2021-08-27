import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class Nav extends Component {
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
        return (
            <nav>
          <div className="logo">风华前端</div>
            <ul className="nav-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/word">Work</NavLink></li>
                <li><NavLink to="/myresume">MyResume</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/signin">Signin</NavLink></li>
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
