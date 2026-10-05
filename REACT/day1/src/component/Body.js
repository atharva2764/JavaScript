import RestCard from "./RestCard";
import restList from "../util/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(restList);
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>{
            const filteredList = restList.filter((res) => res.data.avgRating > 4.3)
            setListOfRes(filteredList)
          }
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
