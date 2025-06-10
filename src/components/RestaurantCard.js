import { IMAGE_BASE_URL } from "../utils/constants"

export default RestaurantCard = ({ resData }) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla, aggregatedDiscountInfoV3 } = resData;
console.log(resData,`${IMAGE_BASE_URL}${cloudinaryImageId}`)

    return (<div className="restaurant-card">
        <div className="image-text-container">
            <div className="image-text-sub-container">
                <img className="restaurant-logo" src={`${IMAGE_BASE_URL}${cloudinaryImageId}`} alt={`${name}-image`} />
                <div className="overlay-text-container">
                    <div className="overlay-text">
                        {aggregatedDiscountInfoV3?.header+aggregatedDiscountInfoV3?.subHeader}
                    </div>
                </div>
            </div>
        </div>
        <h3 className="restaurant-name">{name.length > 10 ? name.slice(0, 20 - 3) + '...': name}</h3>
            <h4>{cuisines.join(", ").length > 20 ? cuisines.join(", ").slice(0, 20 - 3) + '...' : cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
    </div>)
}
