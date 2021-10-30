import ImageContainer from "../../components/ImageContainer/imagecontainer";

function Furniture() {
    return <div className="page-container">
        {/* <!-- 30% --> */}
        <div className="sidebar">
            Sidebar
        </div>
        {/* 60% */}
        <div className="main-body">
            <ImageContainer />
            <div className="product-listings">
                This iis where the products will go
            </div>
        </div>
    </div>;
}

// Always remember to export your component
export default Furniture;