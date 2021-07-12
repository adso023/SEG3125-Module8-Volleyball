import "./Search.css";

export function Search(): JSX.Element {
  return (
    <div id="search">
      <div className="input-group flex-nowrap">
        <i className="bi bi-search btn btn-outline-success"></i>
        <input
          type="text"
          className="form-control"
          placeholder="Search here ..."
          aria-label="Search here ..."
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
}
