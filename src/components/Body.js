import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

export default Body = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [filteredRestaurantList,setFilteredRestaurantList] =  useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const responseData = await response.json();
        setRestaurantList(responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setFilteredRestaurantList(responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    }

    const filterRestaurantHandler = () => {
        const filteredData =  restaurantList.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurantList(filteredData)
    }

    return (
        <>
            {
                filteredRestaurantList.length === 0 ? <Shimmer /> : (
                    <div className="body">
                        <div className="filter">
                            <div className="search">
                                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                                    setSearchText(e.target.value)
                                }} />
                                <button className="search-btn" onClick={filterRestaurantHandler}>Search</button>
                            </div>
                            <button className="filter-btn" onClick={() => {
                                const filteredList = restaurantList.filter(res => res.info.avgRating > 4.6)
                                setRestaurantList(filteredList)
                            }}>Top Rated Restaurant</button></div>
                        <div className="restaurant-container">
                            {
                                filteredRestaurantList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />)
                            }
                        </div>
                    </div>
                )

            }
        </>

    )
}