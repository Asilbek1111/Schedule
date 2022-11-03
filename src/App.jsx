import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Guruh from "./pages/Guruh/Guruh";
import Guruhlar from "./pages/Guruhlar/Guruhlar";
import Home from "./pages/Home/Home";
import Kurs from "./pages/Kurs/Kurs";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://student.uzswlu.uz/rest/v1/data/schedule-list?_faculty=22&_education_year=2022",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer UmFUTOAeRhfGOw-l4znYKHgVNviO5uZ-",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurs" element={<Kurs />} />
        <Route path="/guruh" element={<Guruh />} />
        <Route path="/guruhlar" element={<Guruhlar />} />
      </Routes>
    </div>
  );
};

export default App;
