import React from 'react'


function GiftList(props){


    return(
        <div>
            <ul>
                <li>
                {console.log(props)}
                {props.gifs.map(g => 
                <img alt="" key={g.id} src={g.images.original.url}>
                </img>)}
                
                </li>
            </ul>
        </div>
    )

    
}
//what html to put on the DOM, no methods inside of them
//LCM in functional components

export default GiftList 