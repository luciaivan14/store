import react from 'react';

function ProductListing (props) {
// Finalise props and styling, so that renderProducts can inject the correct product details
    return     <div className="ProductListing">
    <div className="categoryTitle">
            { props.categoryTitle }
    </div>
        <div className="pageTitle">
            { props.pageTitle }
        </div>
        <div className="sortMenu">
            { props.sortMenu }
        </div>
        <div className="filterMenu">
            { props.filterMenu }
        </div>
        <img className="productImage" src={props.productImage} alt="homedecor" align="center" />
        <div className="productTitle">
            { props.productTitle }
        </div>
        <div className="productPrice">
        { props.productPrice }
        </div> 
        <div className="productColour">
        { props.productColour }
        </div>
        <div className="productButton">
        </div>
    </div>;
}

export default ProductListing;
