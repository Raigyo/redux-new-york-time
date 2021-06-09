import React, { useState, useEffect } from "react";
import { Request, Constant } from "./services/index";
import "./App.css";

const { TOP_STORIES, MOST_POPULAR } = Constant;

const Card = ({
  id,
  published_date,
  title,
  abstract,
  section,
  url,
  media,
  img,
}) => {
  return (
    <div className="card d-flex flex-row justify-content-between">
      <div className="d-flex">
        <img
          className="mr-4 rounded"
          src={img}
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

const styles = {
  left: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
  right: {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  info: { padding: 0, listStyleType: "none", fontSize: "14px" },
};

const Tabs = () => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <ul
        className="nav nav-pills nav-fill"
        style={{ marginTop: "20px", width: "70%" }}
      >
        <li className="nav-item">
          <a className="nav-link active" href="#0" style={styles.left}>
            Top Stories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#0" style={styles.right}>
            Most Popular
          </a>
        </li>
      </ul>
    </div>
  );
};

function App() {
  // getter, setter = Array hooks
  const [results, setResults] = useState([]);

  useEffect(() => {
    const request = new Request(TOP_STORIES);
    request
      .get()
      .then((articles) => setResults(articles))
      .catch((err) => console.log({ err }));
  }, []);
  return (
    <div className="container">
      <div className="col-md-8 offset-2">
        <Tabs />
        {results.map((result) => {
          return (
            <>
              <Card {...result} />
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
