import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends Component {

    state = {
        services:[
            {
                icon:<FaCocktail />,
                title:'free cocktails',
                info:'Enjoy the eve with awesome cocktails'
            },
            {
                icon:<FaHiking />,
                title:'endless hiking',
                info:'Exploring the mountains'
            },
            {
                icon:<FaShuttleVan />,
                title:'free shuttle',
                info:'Enjoy the ride'
            },
            {
                icon:<FaBeer />,
                title:'brewery',
                info:'Enjoy our homemade beer'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
               <Title title='services'></Title>
               <div className="services-center">
                   {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                   })}
               </div>
            </section>
        )
    }
}

export default Services;