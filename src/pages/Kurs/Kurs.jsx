import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/Courses";
import "./style.css";

const Kurs = () => {
  var navigate = useNavigate();
  const { course, setCourse, year, setYear } = useContext(MyContext);

  return (
    <div className="kurs text-center justify-content-center d-flex col-md-12 ">
      <button
        type="button"
        className="btn btn-primary  col-md-3"
        onClick={() => {
          navigate("/guruhlar");
          setCourse(11);
          setYear(2022);

        }}
      >
        1-kurs
      </button>
      <button
        type="button"
        className="btn btn-secondary mt-3 col-md-3"
        onClick={() => {
          navigate("/guruhlar");
          setCourse(13);
          setYear(2021);
        }}
      >
        2-kurs
      </button>
      <button
        type="button"
        className="btn btn-success mt-3 col-md-3"
        onClick={() => {
          navigate("/guruhlar");
          setCourse(15);
          setYear(2020);

        }}
      >
        3-kurs
      </button>
      <button
        type="button"
        className="btn btn-warning mb-5 mt-3 col-md-3"
        onClick={() => {
          navigate("/guruhlar");
          setCourse(17);
          setYear(2019);

        }}
      >
        4-kurs
      </button>
    </div>
  );
};

export default Kurs;
