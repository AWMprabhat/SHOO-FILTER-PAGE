import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShoes } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.AppReducer.shoes);
  const [currentShoe, setCurrentShoe] = useState({});

  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getShoes());
    }
  }, [shoes.length, dispatch]);

  useEffect(() => {
    if (id) {
      const currentShoe = shoes.find((shoe) => shoe.id === Number(id));
      currentShoe && setCurrentShoe(currentShoe);
    }
  }, [id, shoes]);
  return (
    <div >
      <h2>{currentShoe?.name}</h2>
      <div>
        <img src={`${currentShoe.image}`} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentShoe?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
