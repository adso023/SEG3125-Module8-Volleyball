/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Alert, Button, FormControl, InputGroup, Modal } from "react-bootstrap";

export function UserInfo(props: any): JSX.Element {
  const resetProfile: {
    name: string;
    memberID: number;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    dob: string;
  } = props.profile;

  const [profile, setProfile] = useState<{
    name: string;
    memberID: number;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    dob: string;
  }>(props.profile);

  const [profileValid, setProfileValid] = useState({
    name: true,
    username: true,
    email: true,
    password: true,
    phoneNumber: true,
    dob: true,
  });
  const [showPassword, setPassowrd] = useState(false);

  return (
    <div>
      <>
        <InputGroup className={`mb-3`}>
          <InputGroup.Text
            id="basic-addon1"
            className={`${!profileValid.name ? "bg-danger text-white" : ""}`}
          >
            Name
          </InputGroup.Text>
          <FormControl
            className={`${!profileValid.name ? "error" : ""}`}
            disabled={props.disabled}
            value={`${profile.name}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...profile, name: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...profileValid };
              if (evt.target.value === "") {
                tempValid.name = false;
              } else {
                tempValid.name = true;
              }

              setProfile(temp);
              setProfileValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
          <FormControl disabled={true} value={`${props.profile.memberID}`} />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !profileValid.username ? "bg-danger text-white" : ""
            }`}
          >
            <i className="bi bi-person"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!profileValid.username ? "error" : ""}`}
            disabled={props.disabled}
            value={`${profile.username}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...profile, username: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...profileValid };
              if (evt.target.value === "") {
                tempValid.username = false;
              } else {
                tempValid.username = true;
              }

              setProfile(temp);
              setProfileValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${!profileValid.email ? "bg-danger text-white" : ""}`}
          >
            @
          </InputGroup.Text>
          <FormControl
            className={`${!profileValid.email ? "error" : ""}`}
            disabled={props.disabled}
            value={`${profile.email}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...profile, email: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...profileValid };
              if (evt.target.value === "") {
                tempValid.email = false;
              } else {
                tempValid.email = true;
              }

              setProfile(temp);
              setProfileValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !profileValid.password ? "bg-danger text-white" : ""
            }`}
          >
            <i className="bi bi-key-fill"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!profileValid.password ? "error" : ""}`}
            disabled={!props.disabled && showPassword ? false : true}
            value={`${
              !showPassword
                ? profile.password
                    .split("")
                    .map((val: string, ind: number, arr: string[]) => {
                      return "*";
                    })
                    .join("")
                : profile.password
            }`}
            onChange={
              !props.disabled && showPassword
                ? (evt) => {
                    // tslint:disable-next-line: typedef
                    let temp = { ...profile, password: evt.target.value };
                    // tslint:disable-next-line: typedef
                    let tempValid = { ...profileValid };
                    if (evt.target.value === "") {
                      tempValid.password = false;
                    } else {
                      tempValid.password = true;
                    }

                    setProfile(temp);
                    setProfileValid(tempValid);
                  }
                : // tslint:disable-next-line: no-empty
                  () => {}
            }
          />
          <Button
            variant="outline-success"
            onClick={() => {
              setPassowrd(!showPassword);
            }}
          >
            <i className="bi bi-eye-fill"></i>
          </Button>
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !profileValid.phoneNumber ? "bg-danger text-white" : ""
            }`}
          >
            <i className="bi bi-telephone-fill"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!profileValid.phoneNumber ? "error" : ""}`}
            disabled={props.disabled}
            value={`${profile.phoneNumber}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...profile, phoneNumber: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...profileValid };
              if (evt.target.value === "") {
                tempValid.phoneNumber = false;
              } else {
                tempValid.phoneNumber = true;
              }

              setProfile(temp);
              setProfileValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${!profileValid.dob ? "bg-danger text-white" : ""}`}
          >
            <i className="bi bi-calendar3"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!profileValid.dob ? "error" : ""}`}
            disabled={props.disabled}
            value={`${profile.dob}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...profile, dob: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...profileValid };
              if (evt.target.value === "") {
                tempValid.dob = false;
              } else {
                tempValid.dob = true;
              }

              setProfile(temp);
              setProfileValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      {!props.disabled ? (
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setProfile(resetProfile);
              setProfileValid({
                name: true,
                username: true,
                email: true,
                password: true,
                phoneNumber: true,
                dob: true,
              });
              props.save(resetProfile);
              props.close();
            }}
          >
            Close
          </Button>
          <Button
            disabled={
              !(
                profileValid.name &&
                profileValid.username &&
                profileValid.email &&
                profileValid.password &&
                profileValid.phoneNumber &&
                profileValid.dob
              )
            }
            variant="primary"
            onClick={() => {
              props.save(profile);
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
