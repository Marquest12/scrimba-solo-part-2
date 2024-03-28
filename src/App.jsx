import React from "react"

import Navbar from "/src/Navbar.jsx"
import Places from "/src/places.jsx"
import data from "/src/data.jsx"

export default function App() {
    const place = data.map(item => {
        return (
            <Places
                key={item.id}
                {...item}
                
            />
        )
    })  
  
    return (
        <>
       <Navbar/>
       {place}
       </>
    )
}