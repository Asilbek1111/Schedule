import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  var navigate = useNavigate();
  return (
    <div className="home text-center justify-content-center d-flex col-md-12 mt-5">
      <button
        onClick={() => {
          navigate("/kurs");
        }}
        type="button"
        className="btn btn-primary  col-md-3 p-2 fs-2"
      >
        Ingliz Filologiyasi Fakulteti
      </button>
    </div>
  );
};

export default Home;
