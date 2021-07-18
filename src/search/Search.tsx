/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Search.css";

// left at selecting an item from the autocomplete list and adding them to cart

export function Search(): JSX.Element {
  const filtersDiv: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const completionListDiv: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const cardListDiv: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<
    {
      lessons: boolean;
      tournament: boolean;
      title: string;
      subTitle: string;
      instructor: string | undefined;
      date: string;
      price: string | undefined;
    }[]
  >([]);
  const [autocomplete, setAutocomplete] = useState<JSX.Element[]>([]);
  const [cartItems, setCartItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // tslint:disable-next-line: typedef
    const search = [
      {
        lessons: true,
        tournament: false,
        title: "Novie Bump and Set Lessons",
        subTitle: "Bump lessons for beginners",
        instructor: "John John",
        date: "July 27, 2021 - July 30, 2021",
        price: "$100",
      },
      {
        lessons: true,
        tournament: false,
        title: "Intermediate Bump and Set Lessons",
        subTitle: "Bump lessons for those coming from novice classes",
        instructor: "John John",
        date: "August 2, 2021 - August 5, 2021",
        price: "$100",
      },
      {
        lessons: true,
        tournament: false,
        title: "Advanced (Final) Bump and Set Lessons",
        subTitle: "Bump lessons for those coming from intermediate classes",
        instructor: "John John",
        date: "August 10, 2021 - August 13, 2021",
        price: "$100",
      },
      {
        lessons: false,
        tournament: true,
        title: "Tournament - Beginners challenge",
        subTitle: "Tournament for beginners in the club",
        instructor: undefined,
        date: "July 26, 2021",
        price: undefined,
      },
      {
        lessons: false,
        tournament: true,
        title: "Tournament - Beginners vs Advanced challenge",
        subTitle:
          "Tournament for beginners versus the advanced members in the club",
        instructor: undefined,
        date: "July 30, 2021",
        price: undefined,
      },
      {
        lessons: false,
        tournament: true,
        title: "Tournament - Intermediate challenge",
        subTitle: "Tournament for intermediate members in the club",
        instructor: undefined,
        date: "August 13, 2021",
        price: undefined,
      },
      {
        lessons: false,
        tournament: true,
        title: "Tournament - Members vs Outsiders",
        subTitle:
          "Tournament for members and non-members who want to participate",
        instructor: undefined,
        date: "August 10, 2021",
        price: undefined,
      },
    ];
    const filters: string[] = ["lessons", "tournaments"];

    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("filters", JSON.stringify(filters));
  }, []);

  // tslint:disable-next-line: typedef
  const buildCartItems = (crt: any) => {
    // tslint:disable-next-line: typedef
    const tempCart = [...crt];

    if (tempCart.length === 0) {
      setCartItems([
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
      ]);
    } else {
      let cardItemsDiv: JSX.Element[] = [];
      for (const tempCartItem of tempCart) {
        const div: JSX.Element = (
          <div
            key={tempCartItem.title}
            className="item d-flex flex-column mt-2"
          >
            <div className="title">
              {`${tempCartItem.title}`} &nbsp;
              {tempCartItem.price !== undefined ? (
                <i
                  className="bi bi-currency-dollar"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Payment required"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="text-muted d-flex justify-content-between">
              <div>{tempCartItem.subTitle}</div>
              {tempCartItem.instructor !== undefined ? (
                <div>
                  <i
                    className="bi bi-person-fill mr-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Instructor"
                  />
                  {tempCartItem.instructor}
                </div>
              ) : (
                <></>
              )}
              <div>
                <i className="bi bi-calendar mr-2" />
                {tempCartItem.date}
              </div>
            </div>
          </div>
        );
        cardItemsDiv = [...cardItemsDiv, div];
      }

      setCartItems(cardItemsDiv);
    }
  };

  useEffect(() => {
    console.log(cart);
    buildCartItems(cart);
  }, [cart]);

  // tslint:disable-next-line: typedef
  const handleSearchItemClicked = (item: any) => {
    setCart([...cart, item]);
  };

  // tslint:disable-next-line: typedef
  const updateSearchList = (term: string) => {
    let getSearchStuff: {
      lessons: boolean;
      tournament: boolean;
      title: string;
      subTitle: string;
      instructor: string | undefined;
      date: string;
      price: string | undefined;
    }[] = JSON.parse(localStorage.getItem("search") || "[]");

    getSearchStuff = getSearchStuff.filter((value) =>
      value.title.toLowerCase().includes(term)
    );

    if (selectedFilters.includes("lessons")) {
      getSearchStuff = getSearchStuff.filter((value) => value.lessons);
    }

    if (selectedFilters.includes("tournaments")) {
      getSearchStuff = getSearchStuff.filter((value) => value.tournament);
    }

    let searchDivs: JSX.Element[] = [];
    for (const searchItems of getSearchStuff) {
      const div: JSX.Element = (
        <div
          key={searchItems.title}
          className="item d-flex flex-column mt-2"
          onClick={() => {
            console.log(`Clicked for ${searchItems.title}`);
            handleSearchItemClicked(searchItems);
          }}
        >
          <div className="title">
            {`${searchItems.title}`} &nbsp;
            {searchItems.price !== undefined ? (
              <i
                className="bi bi-currency-dollar"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Payment required"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="text-muted d-flex justify-content-between">
            <div>{searchItems.subTitle}</div>
            {searchItems.instructor !== undefined ? (
              <div>
                <i
                  className="bi bi-person-fill mr-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Instructor"
                />
                {searchItems.instructor}
              </div>
            ) : (
              <></>
            )}
            <div>
              <i className="bi bi-calendar mr-2" />
              {searchItems.date}
            </div>
          </div>
        </div>
      );

      searchDivs = [...searchDivs, div];
    }

    setAutocomplete(searchDivs);
  };

  // tslint:disable-next-line: typedef
  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
    updateSearchList(evt.target.value);
  };

  // tslint:disable-next-line: typedef
  const builderFiltersBar = () => {
    // tslint:disable-next-line: typedef
    const filters = [...selectedFilters];

    let filtersBar: JSX.Element[] = [];

    for (let i: number = 0; i < filters.length; i++) {
      const chip: JSX.Element = (
        <div className="chip d-flex border border-danger mx-2">
          <div style={{ marginRight: "10px" }}>{filters[i]}</div>
          <i
            className="bi bi-x-circle-fill"
            onClick={() => {
              // tslint:disable-next-line: typedef
              const newFilters = selectedFilters.filter(
                (val) => val !== filters[i]
              );
              setSelectedFilters(newFilters);
              updateSearchList(searchTerm);
            }}
          ></i>
        </div>
      );

      filtersBar = [...filtersBar, chip];
    }

    return filtersBar;
  };

  return (
    <>
      <div id="search" className="d-flex">
        <input
          placeholder="Enter search terms"
          type="text"
          onChange={handleSearchChange}
        />
        <div
          id="searchBtn"
          className="bi bi-search btn btn-outline-success d-flex align-items-center"
        ></div>
      </div>
      <div id="filterWrapper" className="bg-light border border-danger rounded">
        <div
          id="filtersBar"
          className="d-flex justify-content-between align-items-center p-2 border-bottom border-danger"
        >
          <div id="selected" className="d-flex" style={{ width: "90%" }}>
            {builderFiltersBar()}
          </div>
          <div
            id="filterModal"
            className="d-flex btn btn-outline-danger"
            onClick={() => {
              if (!showFilters) {
                setShowFilters(true);
                if (filtersDiv.current) {
                  filtersDiv.current.style.height = "80px";
                  filtersDiv.current.style.overflow = "auto";
                }
              } else {
                setShowFilters(false);
                if (filtersDiv.current) {
                  filtersDiv.current.style.height = "0";
                  filtersDiv.current.style.overflow = "hidden";
                }
              }
            }}
          >
            <i className="bi bi-funnel-fill" />
            <div>Filters</div>
          </div>
        </div>
        <div
          ref={filtersDiv}
          id="availableFilters"
          style={{
            height: "0",
            transition: "all 300ms ease-in-out",
            overflow: "hidden",
          }}
        >
          <div key={`Filter Lesson`} className="mx-2">
            <input
              type="checkbox"
              name={`Lesson`}
              id={`Lesson`}
              checked={selectedFilters.includes("lessons")}
              onChange={(evt) => {
                if (evt.target.checked) {
                  setSelectedFilters([...selectedFilters, "lessons"]);
                } else {
                  // tslint:disable-next-line: typedef
                  const newFilters = selectedFilters.filter(
                    (val) => val !== "lessons"
                  );
                  setSelectedFilters(newFilters);
                }
              }}
            />
            <label
              style={{
                marginLeft: "5px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              htmlFor={`Lesson`}
            >
              {`Lesson`}
            </label>
          </div>
          <div key={`Filter Tournament`} className="mx-2">
            <input
              type="checkbox"
              name={`Tournament`}
              id={`Tournament`}
              checked={selectedFilters.includes("tournaments")}
              onChange={(evt) => {
                if (evt.target.checked) {
                  setSelectedFilters([...selectedFilters, "tournaments"]);
                } else {
                  // tslint:disable-next-line: typedef
                  const newFilters = selectedFilters.filter(
                    (val) => val !== "tournaments"
                  );
                  setSelectedFilters(newFilters);
                }
              }}
            />
            <label
              style={{
                marginLeft: "5px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              htmlFor={`Tournament`}
            >
              {`Tournament`}
            </label>
          </div>
        </div>
      </div>
      <div id="completionList">
        <div id="completionWrapper">
          <div className="d-flex justify-content-between align-items-center mx-2">
            <div className="text-info" style={{ fontSize: "18px" }}>
              <i className="bi bi-info-circle mr-2" />
              {"Select an item to add it to cart"}
            </div>

            <div
              className="btn btn-primary"
              style={{ fontSize: "20px" }}
              onClick={() => {
                if (!showCart) {
                  setShowCart(true);
                  if (completionListDiv.current && cardListDiv.current) {
                    completionListDiv.current.style.height = "0";
                    completionListDiv.current.style.overflow = "hidden";
                    cardListDiv.current.style.height = "70vh";
                    cardListDiv.current.style.overflow = "auto";
                  }
                } else {
                  setShowCart(false);
                  if (completionListDiv.current && cardListDiv.current) {
                    completionListDiv.current.style.height = "70vh";
                    completionListDiv.current.style.overflow = "auto";
                    cardListDiv.current.style.height = "0";
                    cardListDiv.current.style.overflow = "hidden";
                  }
                }
              }}
            >
              {showCart ? (
                <i className="bi bi-x-square-fill"></i>
              ) : (
                <>
                  <i className="bi bi-cart"></i> {cart.length}
                </>
              )}
            </div>
          </div>
          <div
            id="cartList"
            ref={cardListDiv}
            style={{
              height: "0",
              transition: "all 300ms ease-in-out",
              overflow: "hidden",
            }}
          >
            {cartItems}
          </div>
        </div>
        <div
          id="autoCompleteWrapper"
          ref={completionListDiv}
          style={{
            height: "70vh",
            transition: "all 300ms ease-in-out",
            overflow: "auto",
          }}
        >
          {autocomplete}
        </div>
      </div>
    </>
  );
}

export function Search1(): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [filterFilters, setFilters] = useState<string[]>([]);
  const [cart, setCart] = useState<{}[]>([]);
  const [autocomplete, setAutocomplete] = useState<JSX.Element[]>([]);
  // tslint:disable-next-line: typedef
  const handleClose = () => setShow(false);
  // tslint:disable-next-line: typedef
  const handleShow = () => setShow(true);
  // tslint:disable-next-line: typedef
  const updateAutocomplete = (term: string) => {
    // tslint:disable-next-line: typedef
    const getSearch = JSON.parse(localStorage.getItem("search") || "[]");
    // const filters: string[] = [...filterFilters];
    let searchItems: JSX.Element[] = [];
    for (let i: number = 0; i < getSearch.length; i++) {
      if (
        filterFilters.length > 0 &&
        ((filterFilters.includes("lessons") && getSearch[i].lessons) ||
          (filterFilters.includes("tournaments") && getSearch[i].tournament)) &&
        getSearch[i].title.includes(term)
      ) {
        const div: JSX.Element = (
          <div
            key={i}
            className="item d-flex flex-column mt-2"
            // tslint:disable-next-line: no-empty
            onClick={() => {}}
          >
            <div className="title">
              {`${getSearch[i].title}`} &nbsp;
              {getSearch[i].price !== undefined ? (
                <i
                  className="bi bi-currency-dollar"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Payment required"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="text-muted d-flex justify-content-between">
              <div>{getSearch[i].subTitle}</div>
              {getSearch[i].instructor !== undefined ? (
                <div>
                  <i
                    className="bi bi-person-fill mr-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Instructor"
                  />
                  {getSearch[i].instructor}
                </div>
              ) : (
                <></>
              )}
              <div>
                <i className="bi bi-calendar mr-2" />
                {getSearch[i].date}
              </div>
            </div>
          </div>
        );
        searchItems = [...searchItems, div];
      }
    }

    setAutocomplete(searchItems);
  };

  // tslint:disable-next-line: typedef
  const handleAutoComplete = (evt: {
    target: { value: string | undefined };
  }) => {
    if (evt.target.value === "" || evt.target.value === undefined) {
      setAutocomplete([]);
      return;
    } else {
      updateAutocomplete(evt.target.value);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
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
