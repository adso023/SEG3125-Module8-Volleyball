/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Card, Modal, ToggleButton } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Image } from "../messages/image";
import { AddressInfo } from "./addr-info/AddressInfo";
import { PaymentInfo } from "./pay-info/PaymentInfo";
import "./Profile.css";
import { UserInfo } from "./user-info/UserInfo";

// attribution: Image attribution to depositphotos.com

export function Profile(): JSX.Element {
  const [profile, setProfile] = useState({
    name: "Derek Morgan",
    memberID: 9507980.47961887,
    username: "derek.morgan",
    email: "derek.morgan@fbi.com",
    password: "not-secure-password@fake-data",
    phoneNumber: "111-222-3333",
    dob: "12/12/00",
    address: {
      streetName: "Some Street St",
      city: "Some City",
      postalCode: "H0H 0H0",
      country: "Some Country",
      unitOrHouseNumber: 12,
    },
    cardInfo: {
      cardNumber: "4444 4444 4444 4444",
      cvv2: 444,
      exp: "04/04",
    },
  });
  const [userEdit, setUserEdit] = useState(false);
  const [addrEdit, setAddrEdit] = useState(false);
  const [paymEdit, setPaymEdit] = useState(false);
  return (
    <div id="profileRoot">
      <div id="profileImage">
        <i className="bi bi-person-badge" style={{ fontSize: "100px" }}></i>
        <div className="text-muted fw-bold">
          {profile.name} &middot; {profile.memberID}
        </div>
      </div>
      <div id="accordions">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              User Information
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="header-edit mb-2">
                  <Button
                    disabled={userEdit}
                    variant="outline-info"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit User Information"
                    onClick={() => setUserEdit(true)}
                  >
                    <i className="bi bi-pencil-fill"></i>Edit
                  </Button>
                </div>
                <UserInfo
                  disabled={!userEdit}
                  profile={profile}
                  close={() => setUserEdit(false)}
                  save={setProfile}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Address Information
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="header-edit mb-2">
                  <Button
                    disabled={addrEdit}
                    variant="outline-info"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit User Information"
                    onClick={() => setAddrEdit(true)}
                  >
                    <i className="bi bi-pencil-fill"></i>Edit
                  </Button>
                </div>
                <AddressInfo
                  disabled={!addrEdit}
                  address={profile.address}
                  profile={profile}
                  close={() => setAddrEdit(false)}
                  save={setProfile}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Payment Information
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div className="header-edit mb-2">
                  <Button
                    disabled={paymEdit}
                    variant="outline-info"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit User Information"
                    onClick={() => setPaymEdit(true)}
                  >
                    <i className="bi bi-pencil-fill"></i>Edit
                  </Button>
                </div>
                <PaymentInfo
                  disabled={!paymEdit}
                  cardInfo={profile.cardInfo}
                  profile={profile}
                  close={() => setPaymEdit(false)}
                  save={setProfile}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
