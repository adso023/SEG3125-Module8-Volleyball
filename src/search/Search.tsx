import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Search.css";

export function Search(): JSX.Element {
  const [show, setShow] = useState(false);
  const [filterFilters, setFilters] = useState([]);
  // tslint:disable-next-line: typedef
  const handleClose = () => setShow(false);
  // tslint:disable-next-line: typedef
  const handleShow = () => setShow(true);
  // tslint:disable-next-line: typedef
  const buildFilters = () => {
    const filters: [] = JSON.parse(localStorage.getItem("filters") || "[]");

    let filterComponents: any[] = [];

    for (let i: number = 0; i < filters.length; i++) {
      const div = (
        <div key={`Filter${i}`}>
          <input
            type="checkbox"
            name={`${filters[i]}`}
            id={`${filters[i]}`}
            checked={filterFilters.indexOf(filters[i]) !== -1}
            onChange={(evt) => {
              if (evt.target.checked) {
                setFilters([...filterFilters, filters[i]]);
              } else {
                // tslint:disable-next-line: typedef
                const newFilters = filterFilters.filter(
                  (val) => val !== filters[i]
                );
                setFilters(newFilters);
              }
            }}
          />
          <label
            style={{ marginLeft: "5px", fontSize: "20px", fontWeight: "bold" }}
            htmlFor={`${filters[i]}`}
          >
            {filters[i]}
          </label>
        </div>
      );

      filterComponents = [...filterComponents, div];
    }

    return filterComponents;
  };

  // tslint:disable-next-line: typedef
  const buildFiltersBar = () => {
    const filters = [...filterFilters];

    let filtersBar: any[] = [];

    for (let i: number = 0; i < filters.length; i++) {
      const chip: JSX.Element = (
        <div className="chip d-flex border border-danger mx-2">
          <div style={{ marginRight: "10px" }}>{filters[i]}</div>
          <i
            className="bi bi-x-circle-fill"
            onClick={() => {
              // tslint:disable-next-line: typedef
              const newFilters = filterFilters.filter(
                (val) => val !== filters[i]
              );
              setFilters(newFilters);
            }}
          ></i>
        </div>
      );

      filtersBar = [...filtersBar, chip];
    }

    return filtersBar;
  };

  useEffect(() => {
    const search = {};
    const filters = ["lessons", "tournaments", "members"];

    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("filters", JSON.stringify(filters));
  }, []);
  return (
    <>
      <div id="search" className="d-flex">
        <input placeholder="Enter search terms" type="text" />
        <div
          id="searchBtn"
          className="bi bi-search btn btn-outline-success d-flex align-items-center"
        ></div>
      </div>
      <div
        id="filtersBar"
        className="d-flex justify-content-between align-items-center p-2 bg-light border border-danger rounded"
      >
        <div id="selected" className="d-flex" style={{ width: "90%" }}>
          {buildFiltersBar()}
        </div>
        <div id="filterModal" className="d-flex btn btn-outline-danger">
          <i className="bi bi-funnel-fill" onClick={handleShow} />
          <div>Filters</div>
        </div>
      </div>
      <div id="completionList"></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{buildFilters()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
