import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        navigate(comingFrom, { replace: true });
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>LOGIN</h2>
      <form
        style={{ textAlign: "center", fontSize: "24px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label>User Email</label>
          <br />
          <input
            data-cy="login-email"
            type="email"
            value={email}
            style={{ fontSize: "20px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>User Password</label>
          <br />
          <input
            data-cy="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "20px" }}
          />
        </div>
        <button
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            border: "none",
            outline: "none",
            padding: "8px 8px",
            marginTop: "1rem",
            width: "220px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "20px",
          }}
          type="submit"
          data-cy="login-submit"
        >
          {isLoading ? "LOADING" : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
