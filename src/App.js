import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Constant } from "./services/index";
import { getTopStories, getMostPopular } from "./lib/state/actions";
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
    <>
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
    </>
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

const Tabs = ({ updateRequest }) => {
  const links = ["Top stories", "Most popular"];
  // getter, setter = String hooks
  const [active, setActive] = useState("Top stories");
  return (
    <div className="d-flex justify-content-center mb-4">
      <ul
        className="nav nav-pills nav-fill"
        style={{ marginTop: "20px", width: "70%" }}
      >
        {links.map((link, index) => {
          return (
            <li
              className="nav-item"
              key={index}
              onClick={() => {
                setActive(link);
                updateRequest(index === 0 ? TOP_STORIES : MOST_POPULAR);
              }}
            >
              <a
                // className={`nav-link ${link === active ? "active" : ""}`}
                className={`nav-link ${link === active && "active"}`}
                href="#0"
                style={index === 0 ? styles.left : styles.right}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function App() {
  // getter, setter = Array hooks
  //const [results, setResults] = useState([]);
  const [getApi, setApi] = useState(TOP_STORIES);
  const dispatch = useDispatch();
  const { top_stories } = useSelector((state) => ({ ...state.topStories }));
  const { most_popular } = useSelector((state) => ({ ...state.mostPopular }));
  const results = getApi === TOP_STORIES ? top_stories : most_popular;
  useEffect(() => {
    dispatch(getTopStories());
    dispatch(getMostPopular());
  }, [getApi, dispatch]);
  const updateRequest = (withApi) => {
    setApi(withApi);
  };
  return (
    <div className="container">
      <div className="col-md-8 offset-2">
        <Tabs updateRequest={updateRequest} />
        {results.map((result, index) => {
          return (
            <div
              className="card d-flex flex-row justify-content-between"
              key={index}
            >
              <Card {...result} />
            </div>
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
