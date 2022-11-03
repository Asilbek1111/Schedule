import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/Courses";
import "./style.css";

const Kurs = () => {
  var navigate = useNavigate();
  const { course, setCourse } = useContext(MyContext);

  return (
    <div className="text-center justify-content-center d-flex col-md-12 mt-5 ">
      <button
        type="button"
        className="btn btn-primary mt-3 col-md-3"
        onClick={() => {
          navigate("/guruhlar");
          setCourse(11);
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
        }}
      >
        3-kurs
      </button>
      <button
        type="button"
        className="btn btn-warning mt-3 col-md-3"
        onClick={() => {
          navigate("/guruhlar");
          setCourse(17);
        }}
      >
        4-kurs
      </button>
    </div>
  );
};

export default Kurs;
