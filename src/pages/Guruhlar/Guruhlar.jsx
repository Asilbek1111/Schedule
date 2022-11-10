import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/Courses";
import { Link } from "react-router-dom";
import "./style.css";

const Guruhlar = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { course, setGroup, year } = useContext(MyContext);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      `https://student.uzswlu.uz/rest/v1/data/schedule-list?limit=400&l=uz&_faculty=22&_semester=${course}&_education_year=2022`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer UmFUTOAeRhfGOw-l4znYKHgVNviO5uZ-",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.items);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="guruhlar text-center justify-content-center col-12">
        <ul className="list-group col-md-5 ms-auto me-auto">
          {items.map((item) => (
            <li className="list-group-item" key={item.id}>
              <Link to="/guruh" onClick={() => setGroup(item.group.id)}>
                {item.group.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Guruhlar;
