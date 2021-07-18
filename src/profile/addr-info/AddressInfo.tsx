import { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";

export function AddressInfo(props: any): JSX.Element {
  // tslint:disable-next-line: typedef
  const resetAddr = props.address;
  const [address, setAddress] = useState<{
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
    unitOrHouseNumber: number;
  }>(props.address);
  const [addressValid, setAddressValid] = useState({
    streetName: true,
    city: true,
    postalCode: true,
    country: true,
    unitOrHouseNumber: true,
  });
  return (
    <div>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !addressValid.unitOrHouseNumber ? "bg-danger text-white" : ""
            }`}
          >
            #
          </InputGroup.Text>
          <FormControl
            className={`${!addressValid.unitOrHouseNumber ? "error" : ""}`}
            disabled={props.disabled}
            value={`${address.unitOrHouseNumber}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...address, unitOrHouseNumber: +evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...addressValid };
              if (evt.target.value === "") {
                tempValid.unitOrHouseNumber = false;
              } else {
                tempValid.unitOrHouseNumber = true;
              }

              setAddress(temp);
              setAddressValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !addressValid.streetName ? "bg-danger text-white" : ""
            }`}
          >
            <i className="bi bi-signpost"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!addressValid.streetName ? "error" : ""}`}
            disabled={props.disabled}
            value={`${address.streetName}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...address, streetName: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...addressValid };
              if (evt.target.value === "") {
                tempValid.streetName = false;
              } else {
                tempValid.streetName = true;
              }

              setAddress(temp);
              setAddressValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${!addressValid.city ? "bg-danger text-white" : ""}`}
          >
            <i className="bi bi-building"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!addressValid.city ? "error" : ""}`}
            disabled={props.disabled}
            value={`${address.city}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...address, city: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...addressValid };
              if (evt.target.value === "") {
                tempValid.city = false;
              } else {
                tempValid.city = true;
              }

              setAddress(temp);
              setAddressValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${!addressValid.country ? "bg-danger text-white" : ""}`}
          >
            <i className="bi bi-geo-fill"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!addressValid.country ? "error" : ""}`}
            disabled={props.disabled}
            value={`${address.country}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...address, country: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...addressValid };
              if (evt.target.value === "") {
                tempValid.country = false;
              } else {
                tempValid.country = true;
              }

              setAddress(temp);
              setAddressValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !addressValid.postalCode ? "bg-danger text-white" : ""
            }`}
          >
            <i className="bi bi-mailbox"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!addressValid.postalCode ? "error" : ""}`}
            disabled={props.disabled}
            value={`${address.postalCode}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...address, postalCode: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...addressValid };
              if (evt.target.value === "") {
                tempValid.postalCode = false;
              } else {
                tempValid.postalCode = true;
              }

              setAddress(temp);
              setAddressValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      {!props.disabled ? (
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              // tslint:disable-next-line: typedef
              let profile = props.profile;
              Object.assign(profile, resetAddr);

              setAddress(resetAddr);
              setAddressValid({
                streetName: true,
                city: true,
                postalCode: true,
                country: true,
                unitOrHouseNumber: true,
              });

              props.save(profile);
              props.close();
            }}
          >
            Close
          </Button>
          <Button
            disabled={
              !(
                addressValid.city &&
                addressValid.country &&
                addressValid.postalCode &&
                addressValid.streetName &&
                addressValid.unitOrHouseNumber
              )
            }
            variant="primary"
            onClick={() => {
              // tslint:disable-next-line: typedef
              let profile = props.profile;
              Object.assign(profile, address);
              props.save(profile);
              props.close();
            }}
          >
            Save User Information
          </Button>
        </Modal.Footer>
      ) : (
        <></>
      )}
    </div>
  );
}
