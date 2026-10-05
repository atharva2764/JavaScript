const RestCard = (props) => {
  //   const { resName, cusine, rating, delTime } = prop; // destructuring it
  const { restData } = props;
  const { name, cuisines, avgRating, sla, costForTwo } = restData?.data;
  return (
    <div className="rest-card">
      <img
        className="card-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwblbNNpafqsV3AcmYbiuGkBVnBzP_cpRormOnPfjkQ&s=10"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} </h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export default RestCard;
