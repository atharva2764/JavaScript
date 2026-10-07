import RestCard from "./RestCard";
import restList from "../util/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(restList);

  const [searchText, setSearchText] = useState("");
  // useEffect(() => {
  //   fetchData();
  // });
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.1024902&page_type=DESKTOP_WEB_LISTING",
  //   );
  //   console.log(await data.json);

  // };
  return (
    <div className="body">
      <div className="search">
        Search :
        <input
          type="text"
          className="search-field"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // filter the card and update ui
            console.log(searchText);
            const filterSearch = restList.filter((res) =>
              res.data.name.includes(searchText),
            );
            setListOfRes(filterSearch);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restList.filter(
              (res) => res.data.avgRating > 4.3,
            );
            setListOfRes(filteredList);
          }}
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
