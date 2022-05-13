import React from "react";
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
export default function Card(props) { 
    let badgetText;
    if (props.openSpots === 0) {
        badgetText = "SOLD OUT";
    }
    else if (props.country === 'Online') { 
        badgetText = "ONLINE";
    }
    // console.log(badgetText)
    return (
        <div className="card-instances">
            <div className="one-instance">
                {badgetText && <div className="sold-out--logo">{ badgetText } </div>}
                <img src={`../images/${props.img}`} />
                <div className="instance-rate">
                    <img src="../images/star.png" />
                    <p>{ props.rating }</p>
                    <p style={{ color: 'grey' }}> ({props.reviewCount}) • { props.country}</p>
                </div>
                <div className="card--title">
                    { props.title }
                </div>
                <div className="card--cost">
                    <b>From ${ props.price }</b> / person
                </div>
            </div>
        </div>
    )
}