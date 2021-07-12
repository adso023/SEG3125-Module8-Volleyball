import { useEffect } from "react";
import Switch from "react-bootstrap/esm/Switch";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import { Home } from "../home/Home";
import { Search } from "../search/Search";
import "./App.css";

function App(): JSX.Element {
  useEffect(() => {
    localStorage.setItem("serach", "");
  }, []);

  return (
    <Router>
      <header className="bg-success sticky-top">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            style={{ borderRadius: "5px", margin: "5px" }}
            src="https://image.shutterstock.com/image-vector/stylized-illustration-volleyball-fun-script-600w-1083023153.jpg"
            alt=""
            width="75"
            height="75"
          />
          <h4 className="text-white">VolleyBall Club, Bump, Set, Spike !!!</h4>
        </div>
      </header>

      <div
        className="border-bottom border-dark border-5 rounded"
        id="upcomingLessons"
      >
        <div
          className="d-flex justify-content-between mx-3 px-2 mt-2 pt-2 pb-2"
          style={{
            background:
              "linear-gradient(to right, rgba(67, 233, 123, 0.5), rgba(56, 249, 215, 0.5))",
          }}
        >
          <h4 className="d-flex justify-content-center align-items-center">
            Upcoming Lessons
          </h4>
          <i
            className="bi bi-arrow-right btn btn-outline-success"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Click to see expanded list"
            style={{ fontSize: "22px", fontWeight: "bolder" }}
          ></i>
        </div>
        <div
          className="mx-3 px-2 mt-2 pt-2 pb-2"
          style={{ height: "300px", overflow: "auto" }}
        >
          <div
            className="d-flex justify-content-center text-danger"
            style={{ fontSize: "22px" }}
          >
            <i
              className="bi bi-exclamation-octagon-fill"
              style={{ marginRight: "5px" }}
            ></i>
            <h6 className="d-flex justify-content-center align-items-center m-0">
              No Lessons
            </h6>
          </div>
        </div>
      </div>

      <div
        className="border-bottom border-dark border-5 rounded"
        id="upcomingTournaments"
      >
        <div
          className="d-flex justify-content-between mx-3 px-2 mt-2 pt-2 pb-2"
          style={{
            background:
              "linear-gradient(to right, rgba(67, 233, 123, 0.5), rgba(56, 249, 215, 0.5))",
          }}
        >
          <h4 className="d-flex justify-content-center align-items-center">
            Upcoming Tournaments
          </h4>
          <i
            className="bi bi-arrow-right btn btn-outline-success"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Click to see expanded list"
            style={{ fontSize: "22px", fontWeight: "bolder" }}
          ></i>
        </div>
        <div
          className="mx-3 px-2 mt-2 pt-2 pb-2"
          style={{ height: "300px", overflow: "auto" }}
        >
          <div
            className="d-flex justify-content-center text-danger"
            style={{ fontSize: "22px" }}
          >
            <i
              className="bi bi-exclamation-octagon-fill"
              style={{ marginRight: "5px" }}
            ></i>
            <h6 className="d-flex justify-content-center align-items-center m-0">
              No Tournaments
            </h6>
          </div>
        </div>
      </div>

      <footer className="fixed-bottom d-flex justify-content-around p-2 bg-light">
        <div
          className="btn btn-primary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Search for lessons or tournaments"
          style={{ fontSize: "20px" }}
        >
          <i className="bi bi-search" style={{ marginRight: "5px" }}></i>Search
        </div>
        <div
          className="btn btn-outline-info d-flex align-items-center"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Help for FAQs"
          style={{ fontSize: "20px", fontWeight: "bolder" }}
        >
          <i className="bi bi-question-circle"></i>
        </div>
        <div
          className="btn btn-danger"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Access your profile"
          style={{ fontSize: "20px" }}
        >
          <i className="bi bi-person-fill"></i>Profile
        </div>
      </footer>

      <Switch>
        <Link to="/lessons"></Link>
        <Link to="/tournaments"></Link>
        <Link to="/search"></Link>
      </Switch>
    </Router>
  );
}

export default App;
