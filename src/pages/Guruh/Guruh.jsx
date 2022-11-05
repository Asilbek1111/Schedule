import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/Courses";
import "./style.css";

function Guruh() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { group, course, year } = useContext(MyContext);
  var week = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(
      `https://student.uzswlu.uz/rest/v1/data/schedule-list?l=uz&_faculty=22&_group=${group}&_semester=${course}&_education_year=2022`,
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
          var dayArr = [[], [], [], [], [], []];
          const weekStartTime = result.data.items[0].weekStartTime;
          result.data.items.forEach((e) => {
            if (e.lesson_date === weekStartTime) {
              if (!dayArr[0].includes(e)) {
                dayArr[0].sort().push(e);
              }
            }
            if (e.lesson_date === weekStartTime + 86400) {
              if (!dayArr[1].includes(e)) {
                dayArr[1].sort().push(e);
              }
            }
            if (e.lesson_date === weekStartTime + 86400 * 2) {
              if (!dayArr[2].includes(e)) {
                dayArr[2].sort().push(e);
              }
            }
            if (e.lesson_date === weekStartTime + 86400 * 3) {
              if (!dayArr[3].includes(e)) {
                dayArr[3].sort().push(e);
              }
            }
            if (e.lesson_date === weekStartTime + 86400 * 4) {
              if (!dayArr[4].includes(e)) {
                dayArr[4].sort().push(e);
              }
            }
            if (e.lesson_date === weekStartTime + 86400 * 5) {
              if (!dayArr[5].includes(e)) {
                dayArr[5].sort().push(e);
              }
            }
          });

          setSchedule(dayArr);
          console.log(dayArr);
          console.log(year);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [isLoaded]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="guruh">
        {schedule.length !== 0 ? (
          schedule?.map((item, index) => (
            <div key={index} className="row item mb-4">
              <div className="col-12 col-md-1 header py-4 d-flex align-items-center justify-content-center">
                <p className="m-0 writing-mode">{week[index]}</p>
              </div>
              <div className="col-12 col-md-11">
                <table className="table table-striped w-100">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">End time</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Xona</th>
                      <th scope="col">Turi</th>
                      <th scope="col">O'qituvchi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item
                      .sort((a, b) => a.id > b.id)
                      .map((lesson) => (
                        <tr key={lesson.id}>
                          <th scope="row">{lesson.lessonPair.name}</th>
                          <td>{lesson.lessonPair.start_time}</td>
                          <td>{lesson.lessonPair.end_time}</td>
                          <td>{lesson.subject.name}</td>
                          <td>{lesson.auditorium.name}</td>
                          <td>{lesson.trainingType.name}</td>
                          <td>{lesson.employee.name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center">Sizda dars jadvali shakillanmagan</h2>
        )}
      </div>
    );
  }
}

export default Guruh;
