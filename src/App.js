import React, { useState, useEffect } from "react";
import "./App.css";

const placeholderImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";

const Card = ({ id, published_date, title, abstract, section, url, media }) => {
  const image = (media) => {
    return media ? media[0]["media-metadata"][0].url : placeholderImg;
  };

  return (
    <div className="card d-flex flex-row justify-content-between">
      <div className="d-flex">
        <img
          className="mr-4 rounded"
          src={image(media)}
          alt="placeholder"
          width="170"
          height="170"
        />
        <div className="d-flex flex-column" style={{ width: "75%" }}>
          <p>
            <small>
              <strong>{published_date}</strong>
            </small>
          </p>
          <h5>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2980b9" }}
            >
              {title}
            </a>
          </h5>
          <i>{abstract}</i>
        </div>
      </div>
      <p className="d-flex text-right" style={{ color: "#2980b9" }}>
        <strong>{section}</strong>
      </p>
    </div>
  );
};

const Navigation = () => (
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#0">
        Top stories
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#0">
        Most Popular
      </a>
    </li>
  </ul>
);

function App() {
  // getter, setter = Array hooks
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=Zx9nn2HMNuqg0B3x0OvpGsQt6hdNv1Be"
    )
      .then((response) => {
        // console.log(response);
        // debugger;
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        // console.log(data.results)
        setResults(data.results);
      });
  }, []);
  return (
    <div className="container">
      <div className="col-md-6 offset-3" style={{ marginTop: "20px" }}>
        <Navigation />
        <br />
        {results.map((result) => {
          return (
            <>
              <Card {...result} /> <br />
            </>
          );
        })}
        {/* {results.map(() => (
          <Card />
        ))} */}
      </div>
    </div>
  );
}

export default App;
