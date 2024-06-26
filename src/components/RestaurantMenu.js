import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ITEM_TYPES } from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === ITEM_TYPES
  );

  return (
    <>
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h1>{name}</h1>
            <h4>{cuisines?.join(", ")} - {costForTwoMessage}</h4>
          </div>
        </div>
      </div>
      <div className="">
        {
          categories.map((c, index) => {
            return (
              <RestaurantCategory
                key={c.card.card.title}
                data={c?.card?.card}
                showItems={index === showIndex}
                setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default RestaurantMenu;
