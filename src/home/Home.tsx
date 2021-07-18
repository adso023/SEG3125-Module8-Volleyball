import { Link } from "react-router-dom";
import "./Home.css";

export function Home(): JSX.Element {
  // tslint:disable-next-line: typedef
  const buildUpComingLessons = () => {
    let lessons: JSX.Element[] = [];
    // tslint:disable-next-line: typedef
    const upcomingLessons = JSON.parse(
      localStorage.getItem("upcoming") || "{}"
    ).lessons;

    if (upcomingLessons.length === 0) {
      lessons = [
        ...lessons,
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
        </div>,
      ];
    } else {
      for (const lesson of upcomingLessons) {
        const div: JSX.Element = (
          <div key={lesson.title} className="item d-flex flex-column mt-2">
            <div className="title">{`${lesson.title}`} &nbsp;</div>
            <div className="text-muted d-flex justify-content-between">
              <div>{lesson.subTitle}</div>
              {lesson.instructor !== undefined ? (
                <div>
                  <i
                    className="bi bi-person-fill mr-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Instructor"
                  />
                  {lesson.instructor}
                </div>
              ) : (
                <></>
              )}
              <div>
                <i className="bi bi-calendar mr-2" />
                {lesson.date}
              </div>
            </div>
          </div>
        );
        lessons = [...lessons, div];
      }
    }

    return lessons;
  };

  // tslint:disable-next-line: typedef
  const buildUpComingTournaments = () => {
    let tournaments: JSX.Element[] = [];
    // tslint:disable-next-line: typedef
    const upcomingTournaments = JSON.parse(
      localStorage.getItem("upcoming") || "{}"
    ).tournaments;

    if (upcomingTournaments.length === 0) {
      tournaments = [
        ...tournaments,
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
        </div>,
      ];
    } else {
      for (const tournament of upcomingTournaments) {
        const div: JSX.Element = (
          <div key={tournament.title} className="item d-flex flex-column mt-2">
            <div className="title">{`${tournament.title}`} &nbsp;</div>
            <div className="text-muted d-flex justify-content-between">
              <div>{tournament.subTitle}</div>
              <div>
                <i className="bi bi-calendar mr-2" />
                {tournament.date}
              </div>
            </div>
          </div>
        );
        tournaments = [...tournaments, div];
      }
    }

    return tournaments;
  };
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
          {/* <div
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
          </div> */}
          {buildUpComingLessons()}
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
          {/* <div
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
          </div> */}
          {buildUpComingTournaments()}
        </div>
      </div>
    </>
  );
}
