import React, { Component } from 'react'
import axios from "axios"

import "./index.css"

export default class ArticleList extends Component {
    state = {allpost: []}
    componentDidMount() {
            axios({
                method: 'get',
                url: 'http://localhost:3001/post',
            })
              .then((res)=>{
              this.setState({allpost: res.data })//need iterate over the array using
              })
            }
    
    render() {
        const data = this.state.allpost
        return (
            <div className="article">
       {  data.map( (k,i) => {
        return (
    <div key={k._id} className="article-item">
                <div className="article-title">{k.title}</div>
                    {k.date}
             </div>)
} )}   
            </div>
       
        )
    }
}
