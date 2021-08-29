import React, { Component } from 'react'
import axios from "axios"
import marked from "marked"
import {getDate} from "../../../utils/index.js"

import "./index.css"

export default class ArticleEdit extends Component {
    state = {allpost: 0,
    content_display: ''
    }
    post = this.post.bind(this)
    compile = this.compile.bind(this)
    title = React.createRef()
    gist = React.createRef()
    content = React.createRef()
    content_display = React.createRef()
    post() {
        const title = this.title.current.value
        const gist = this.gist.current.value
        const content = this.content.current.innerText
        if(title.trim() === '') {
            alert('please enter a title')
            return 
        }
        if(gist.trim() === '') {
            alert('palse enter a gist')
            return
        }
        if(content.trim() === '') {
            alert('palse enter some content')
            return
        }
        let date = getDate()
            axios({
                method: 'post',
                url: 'http://localhost:3001/post',
                data: {
                    title: title,
                    gist: gist,
                    content: content,
                    date: date
                }
            });
    }
    compile() {
       this.content_display.current.innerHTML = marked(this.content.current.innerText)
    }
    render() {
        return (
     <div className="articleedit">
                <span className="edit-title" >标题</span>
                <input type="text" ref={this.title} className="title" placeholder="请输入标题" />
                <span className="edit-dist">简介</span>
                <input type="text" ref={this.gist} className="gist" placeholder="请输入简介" />
                <span className="edit-content">内容 （Markdown编辑器）</span>
                <div className="edit-content-container">
                    <div className="content" contentEditable='true' ref={this.content} onInput={this.compile}></div>
                    <div ref={this.content_display} className="content-display"></div>
                </div>
                <button className="save" onClick={this.post}>保存</button>
                </div>
        )
    }
}
