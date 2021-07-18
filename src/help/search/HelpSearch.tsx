import { Accordion, Card } from "react-bootstrap";

export function HelpSearch(): JSX.Element {
  return (
    <div id="helpSearchAccordion">
      <Accordion>
        <Card>
          <Accordion.Toggle eventKey="0" as={Card.Header}>
            Filtering
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/searchh1.gif"}
                width="410px"
                height="250px"
                alt="Search Help 1"
              />
              <div className="px-3">
                Click on the filter button to open the overlay and select
                filters.
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="1" as={Card.Header}>
            Searching for Items and Add to Cart
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/searchh2.gif"}
                width="410px"
                height="250px"
                alt="Search Help 2"
              />
              <div className="px-3">
                Search for an item click on result to add to cart
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="2" as={Card.Header}>
            Accessing the Cart
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/searchh3.gif"}
                width="410px"
                height="250px"
                alt="Search Help 3"
              />
              <div className="px-3">
                Click on cart icon button to access the cart overlay to view
                items in it. Click the close icon button where the cart used to
                be go back to search results
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="3" as={Card.Header}>
            Checkout
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <div className="d-flex flex-column align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/searchh4.gif"}
                width="410px"
                height="250px"
                alt="Search Help 4"
              />
              <div className="px-3">
                Once in cart view click on the shopping bag icon button to
                access the payment checkout modal. From there your credit cart
                information should be autofilled. If you want to change any
                information you can do so but everytime you go to checkout your
                account payment information will be autofilled. Once you have
                finished and clicked <strong>Complete Checkout</strong> a
                notification will appear confirming your order
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
