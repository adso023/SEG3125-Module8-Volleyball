export function Lessons(): JSX.Element {
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
  return (
    <div className="p-2">
      <h4>Upcoming Lessons</h4>
      <>{buildUpComingLessons()}</>
    </div>
  );
}
