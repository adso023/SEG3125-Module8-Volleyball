import { Accordion, Card } from "react-bootstrap";

export function HelpProfile(): JSX.Element {
  return (
    <div id="helpProfileAccordion">
      <Accordion>
        <Card>
          <Accordion.Toggle eventKey="0" as={Card.Header}>
            In Profile Navigation
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/profileh1.gif"}
                width="410px"
                height="250px"
                alt="Profile Help 1"
              />
              <div className="px-3">
                Click on the headings of each sections to view the section
                information.
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="1" as={Card.Header}>
            Editing Profile Information
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/profileh2.gif"}
                width="410px"
                height="250px"
                alt="Profile Help 2"
              />
              <div className="px-3">
                Open a section and click the edit button. If a field is empty
                the user won't be able to save the information (Clicking close
                will reset the information).
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
