import { Link } from "react-router-dom";
import "./Home.css";

export function Home(): JSX.Element {
  return (
    <>
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
          <Link to="/lessons">
            <i
              className="bi bi-arrow-right btn btn-outline-success"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Click to see expanded list"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            ></i>
          </Link>
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
          <Link to="/tournaments">
            <i
              className="bi bi-arrow-right btn btn-outline-success"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Click to see expanded list"
              style={{ fontSize: "22px", fontWeight: "bolder" }}
            ></i>
          </Link>
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
    </>
  );
}
