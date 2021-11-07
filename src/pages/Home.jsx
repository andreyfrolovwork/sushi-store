import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Categories,
  SushiBlock,
  SushiLoadingBlock,
  SortPopup,
} from "../components";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchSushi } from "../redux/actions/sushi";

const categoryNames = [
  "DAILY SPECIALS",
  "POKE BOWLS",
  "APPETIZERS AND SALADS",
  "NIGIRI AND SASHIMI / 2PCS",
  "HOSOMAKI / 6PCS",
  "MAKI / 8PCS",
  "SUMOMAKI / 5PCS",
  "BLOSSOM /4 to 8 pcs",
  "SUSHI sushi / 6PCS",
  "SUSHI BURRITO",
  "TEMARI /2 to 4 pcs",
  "SUSHI TACOS / 2 or 3",
  "KARAAGE CHICKEN",
  "HAKO / 6PCS",
  "TARTARE MAKI /4 PCS",
  "TARTARES",
  "DESSERTS",
  "SPRING MAKI / 2PCS",
  "COMBOS",
  "PLATTERS",
];
const sortIems = [
  { name: "popular", type: "popular", order: "desc" },
  { name: "price", type: "price", order: "desc" },
  { name: "name", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ sushi }) => sushi.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ sushi }) => sushi.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchSushi(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddsushiToCart = (obj) => {
    dispatch({
      type: "ADD_SUSHI_CART",
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title"> </h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <SushiBlock
                onClickAddsushi={handleAddsushiToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <SushiLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
