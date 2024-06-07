import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
  }) => {
    
    return (
      <div className="res-card">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating+"⭐️"}</h4>
      </div>
    );
  };
  export default RestaurantCard