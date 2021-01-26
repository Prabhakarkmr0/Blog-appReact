import React, { Component } from 'react'
import Card from "./Card"
import "./section.css"

class Section extends Component {
    constructor(){
        super();
        this.state={
            blog : []
        }
    }

    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url)
        const udat = await response.json();
        // console.log(udat[0])
        this.setState({blog:udat})
    }

    render() {
        return (
            <div className="blogs">
                            
               
        {
        
            this.state.blog.map((item)=>
            <Card item={item}
            key={item.id}/>)
        
        }
   
            </div>
        )
    }
}

export default Section