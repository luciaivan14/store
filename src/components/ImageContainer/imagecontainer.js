import react from 'react';

function ImageContainer(props) {
    const message = "Shop Now"

    return     <div className="image-container">
    <div className={ "floating-text " + props.position }>
         <a href="/new-in">{props.buttonMessage ? props.buttonMessage : message}</a>
    </div>
        <img className="full-width-image" src={props.image} alt="homedecor" align="center" />
    
    </div>;
}

export default ImageContainer;

// if (props.buttonMessage == null) {
//     message
// } else {
//     props.buttonMessage
// }