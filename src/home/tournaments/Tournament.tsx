export function Tournament(): JSX.Element {
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
    <div className="p-2">
      <h4>Upcoming Tournaments</h4>
      <>{buildUpComingTournaments()}</>
    </div>
  );
}
