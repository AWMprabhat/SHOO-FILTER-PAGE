import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { getShoes } from "../Redux/AppReducer/action";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoesData = useSelector((state) => state.AppReducer.shoes);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let getShoesParams;
    if (location.search || shoesData.length === 0) {
      getShoesParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
    }
    dispatch(getShoes(getShoesParams));
  }, [location.search]);
  return (
    <div style={{ display: "flex" }}>
      <Filter />
      <div
        style={{
          width: "100%",
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "repeat(auto-fit,  minmax(300px, max-content))",
          justifyContent: "center",
        }}
      >
        {shoesData.length > 0 &&
          shoesData.map((shoe) => {
            return (
              <div key={shoe.id} style={{ width: "200px" }}>
                <Link
                  to={`/shoes/${shoe.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ShoeCard {...shoe} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shoes;
