import { Accordion, Card } from "react-bootstrap";

export function HelpHome(): JSX.Element {
  return (
    <div id="helpHomeAccordion">
      <Accordion>
        <Card>
          <Accordion.Toggle eventKey="0" as={Card.Header}>
            Navigation
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/homeh1.jpg"}
                width="410px"
                height="250px"
                alt="Home Help 1"
              />
              <div className="px-3">
                The arrows point to different routes that users can take such as{" "}
                <strong>Search</strong>, <strong>Profile</strong>,{" "}
                <strong>Messages</strong> and then back to <strong>Home</strong>
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="1" as={Card.Header}>
            Upcoming Information
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/homeh2.jpg"}
                width="410px"
                height="250px"
                alt="Home Help 2"
              />
              <div className="px-3">
                The page is separated into 2 sections to show upcoming lessons
                and tournaments. The section will only show upto 6 results of
                upcoming information and to view everything the user should
                click the arrow buttons (<strong>Refer to Navigation</strong>)
                to view the entire list
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
