import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import config from "../../config.js"

function SushiBlock({
  _id,
  name,
  url,
  price,
  types,
  onClickAddsushi,
  addedCount,
  description,
}) {
  const availableTypes = ["тонкое", "традиционное"];

  const [activeType, setActiveType] = React.useState(types[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onAddsushi = () => {
    const obj = {
      _id,
      name,
      imageUrl: url,
      price,
      type: availableTypes[activeType],
    };
    onClickAddsushi(obj);
  };

  return (
    <div className="sushi-block">
      <div className="sushi-block__img_block">
        <img className="sushi-block__image" src={url} alt="sushi" />
      </div>
      <div className="sushi-block__name_block">
        <h4 className="sushi-block__title">{name}</h4>
      </div>
      <div className="sushi-block__description_block">
        <h5 className="sushi-block__title">{description}</h5>
      </div>

      <div className="sushi-block__bottom">
        <div className="sushi-block__price">{price} $</div>
        <Button onClick={onAddsushi} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span> Add</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

SushiBlock.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  onClickAddsushi: PropTypes.func,
  addedCount: PropTypes.number,
};

SushiBlock.defaultProps = {
  name: "---",
  price: 0,
  types: [],
};

export default SushiBlock;
