import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
    const cards = data.map(item => { 
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card--container" >
                { cards }
            </div>
        </div>
    )
} 