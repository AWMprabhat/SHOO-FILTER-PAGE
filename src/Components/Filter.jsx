import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];
    if (category.includes(option)) {
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "5px",
        marginLeft: "1rem",
        width: "290px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Filters</h3>
      <div style={{ padding: "0 0 5px 5px", fontSize: "18px" }}>Category</div>
      <div style={{ paddingLeft: "15px" }} data-cy="filter-category">
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Sneakers"
            checked={category.includes("Sneakers")}
          />
          <label htmlFor="">Sneakers</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Loafers"
            checked={category.includes("Loafers")}
          />
          <label htmlFor="">Loafers</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Canvas"
            checked={category.includes("Canvas")}
          />
          <label htmlFor="">Canvas</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Boots"
            checked={category.includes("Boots")}
          />
          <label htmlFor="">Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
