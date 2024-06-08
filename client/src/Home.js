import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Medicine Supply Chain</h1>
      </div>
      <br />
      <div className="register">
        <h5>Register Roles</h5>
        <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">
          Register
        </button>
      </div>
      <br />
      <div className="ordermedicines">
        <h5>Order Medicines</h5>
        <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">
          Order Medicines
        </button>
      </div>
      <br />
      <div className="controlchain">
        <h5>Control Supply Chain</h5>
        <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">
          Control Supply Chain
        </button>
      </div>
      <br />
      <div className="track">
        <h5>Track Medicines</h5>
        <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">
          Track Medicines
        </button>
      </div>
    </div>
  );
}

export default Home;
