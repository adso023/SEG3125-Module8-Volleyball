import { useEffect } from "react";
import Switch from "react-bootstrap/esm/Switch";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import { Home } from "../home/Home";
import { Lessons } from "../home/lessons/Lessons";
import { Tournament } from "../home/tournaments/Tournament";
import { Messages } from "../messages/Message";
import { Profile } from "../profile/Profile";
import { Search } from "../search/Search";
import "./App.css";

function App(): JSX.Element {
  useEffect(() => {
    const upcoming = {
      lessons: [
        {
          name: "Spikes Learn-to-Play",
          date: "2021/07/19 - 2021/07/24",
          instructor: "James Spalding",
        },
        {
          name: "",
          date: "2021/07/19 - 2021/07/24",
          instructor: "James Spalding",
        },
      ],
      tournaments: {},
    };

    const profile: {
      name: string;
      memberID: number;
      username: string;
      email: string;
      password: string;
      phoneNumber: string;
      dob: string;
      address: {
        streetName: string;
        city: string;
        postalCode: string;
        country: string;
        unitOrHouseNumber: number;
      };
      cardInfo: {
        cardNumber: string;
        cvv2: number;
        exp: string;
      };
    } = {
      name: "Derek Morgan",
      memberID: Math.random() * 10000000,
      username: "derek.morgan",
      email: "derek.morgan@fbi.com",
      password: "not-secure-password@fake-data",
      phoneNumber: "111-222-3333",
      dob: "12/12/00", // mm/dd/yy
      address: {
        streetName: "Some Street St",
        city: "Some City",
        postalCode: "H0H H0H",
        country: "Some Country",
        unitOrHouseNumber: 12,
      },
      cardInfo: {
        cardNumber: "4444 4444 4444 4444",
        cvv2: 444,
        exp: "04/04",
      },
    };

    localStorage.setItem("upcoming", JSON.stringify(upcoming));
    localStorage.setItem("profile", JSON.stringify(profile));
  }, []);

  return (
    <Router>
      <header className="bg-success sticky-top d-flex justify-content-between">
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

        <div className="d-flex justify-content-center align-items-center">
          <Link to="/home">
            <div
              className="d-flex justify-content-center align-items-center btn"
              style={{ fontSize: "20px" }}
            >
              <i className="bi bi-house-door-fill"></i>
              <div style={{ marginLeft: "5px" }}>Home</div>
            </div>
          </Link>
          <Link to="/messages">
            <div
              className="d-flex justify-content-center align-items-center btn"
              style={{ fontSize: "20px" }}
            >
              <i className="bi bi-chat-dots-fill"></i>
              <div style={{ marginLeft: "5px" }}>Messages</div>
            </div>
          </Link>
        </div>
      </header>

      {/* Route Switcher */}
      <Switch>
        <Route path="/lessons">
          <Lessons />
        </Route>
        <Route path="/tournaments">
          <Tournament />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>

      <footer className="fixed-bottom d-flex justify-content-around p-2 bg-light">
        <Link to="/search">
          <div
            className="btn btn-primary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Search for lessons or tournaments"
            style={{ fontSize: "20px" }}
          >
            <i className="bi bi-search" style={{ marginRight: "5px" }}></i>
            Search
          </div>
        </Link>
        <div
          className="btn btn-outline-info d-flex align-items-center"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Help for FAQs"
          style={{ fontSize: "20px", fontWeight: "bolder" }}
        >
          <i className="bi bi-question-circle"></i>
        </div>
        <Link to="/profile">
          <div
            className="btn btn-danger"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Access your profile"
            style={{ fontSize: "20px" }}
          >
            <i className="bi bi-person-fill"></i>Profile
          </div>
        </Link>
      </footer>
    </Router>
  );
}

export default App;
