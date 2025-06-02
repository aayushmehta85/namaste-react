export default RestaurantCard = ({ resData }) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, deliveryTime } = resData?.data;


    return (<div className="restaurant-card">
        <div className="image-text-container">
            <div className="image-text-sub-container">
                <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1" alt="res-image" />
                <div className="overlay-text-container">
                    <div className="overlay-text">
                        Item at ₹149
                    </div>
                </div>
            </div>
        </div>
        <h3 className="restaurant-name">{name.length > 10 && name.slice(0, 20 - 3) + '...'}</h3>
            <h4>{cuisines.join(", ").length > 20 ? cuisines.join(", ").slice(0, 20 - 3) + '...' : cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime || 38} minutes</h4>



    </div>)
}
