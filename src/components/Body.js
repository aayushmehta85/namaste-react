import { useState } from "react"
import { listOfRestaurant } from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

export default Body = () => {
    const [restaurantList,setRestaurantList] = useState([...listOfRestaurant])
    // const [filteredRestaurant,setFilteredRestaurant] =  useState([...listOfRestaurant])
    


    return (
        <div className="body">
            <div className="filter">
                <div className="search">Search</div>
                <button className="filter-btn" onClick={()=>{
                   const filteredList = restaurantList.filter(res=> res.data.avgRating > 4)
                   setRestaurantList(filteredList)
                }}>Top Rated Restaurant</button></div>
            <div className="restaurant-container">
                {
                    restaurantList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}