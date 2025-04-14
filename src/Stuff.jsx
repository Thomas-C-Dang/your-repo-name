function Stuff({name = "Mark Grayson", 
    title = "SEA SALT! I NEED YOU SEA SALT!"}){


    return(
        <div className= "myCard">
            <img className = "cardPic" src="https://placehold.co/100x100"></img>
           <h3>{name}</h3> 
           <p>{title}</p>
        </div>
    );
}


export default Stuff;