import star from "./images/star.png"

function Card(props){
    return(
        <div className= "entire-card-container">
    
            <img className="katie" src={`../images/${props.img}`} alt="superstar"></img>
            
            <div className="star">
                <img className="red-star " src={star} alt="star"></img>
                <p className="star-para">{props.stats.rating} ({props.stats.reviewCount}) · {props.location}</p>   
            </div>

            <p>{props.title}</p>
            
            <p><span><strong>From ${props.price}</strong></span> / person </p>
        </div>
    )
}

export default Card
