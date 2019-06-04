import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
state={
    Services:[
        {
            icon:<FaCocktail/>,
            title:"Free Cocktails",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere"
        },
        {
            icon:<FaHiking/>,
            title:"Endles Hiking",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free  Shu",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere"
        },
        {   
            icon:<FaBeer/>,
            title:"Stronges Beer",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere"
        }
    ]
}
    
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.Services.map((item, i) => {
                        return (
                            <article key={i} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
