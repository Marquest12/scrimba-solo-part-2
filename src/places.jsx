import React from "react";

export default function Place(props){
    return(
        <div className="place-container">
            <img src={props.imageUrl}/>
            <div className="items">
                <div className="location-googlelink">
                    <p className="location">{props.location}</p>
                    <a className="googleLink" href={props.googleMapsUrl} >View on Google Maps</a>
                </div>
                <p className="title2">{props.title}</p>
                <div className="dates">
                    <p>{props.startDate} - </p>
                    <p>{props.endDate}</p>
                </div>
                <p className="description">{props.description}</p>
                <br></br>
            </div>
        </div>
    )
}


// import React from "react"

// export default function Card(props) {
//     let badgeText
//     if (props.item.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.item.location === "Online") {
//         badgeText = "ONLINE"
//     }
    
//     return (
//         <div className="card">
//             {badgeText && <div className="card--badge">{badgeText}</div>}
//             <img src={`../images/${props.item.coverImg}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p className="card--title">{props.item.title}</p>
//             <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
//         </div>
//     )
// }