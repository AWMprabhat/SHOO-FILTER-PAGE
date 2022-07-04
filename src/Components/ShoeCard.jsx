import React from "react";

const ShoeCard = ({ id, name, image, category }) => {
  // let shoeId = "";
  return (
    <div
      data-cy={`shoe-card-wrapper-${id}`}
      style={{
        display: "block",
        width: "300px",
        height: "390px",
        border: "2px solid black",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "320px",
          padding: "20px 20px 0 20px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          data-cy="shoe-card-image"
          alt="shoe"
          src={image}
          style={{
            backgroundSize: "contain",
            width: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div data-cy="shoe-name" style={{ fontSize: "24px" }}>
          {name}
        </div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
