import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import "./index.css"

export default class Signin extends Component {
    state = {
        nav: true,
        name:'xt'
    }
    submit() {
        alert('000')
    }
    render() {
        PubSub.publish('nav-admin',this.state.nav)
        return (
            <div className="signin_wrap">
           <form action="" className="signin_form" onSubmit={this.submit}>
               <span className="name">用户名</span >
               <input type="text" className="name" />
               <span className="password">密码</span>
               <input type="text" className="password" />
               <button className="signin">登陆</button>
               <button className="register">注册</button>
           </form>

           </div>
        )
    }
}
