import { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";

export function PaymentInfo(props: any): JSX.Element {
  // tslint:disable-next-line: typedef
  const resetCard = props.cardInfo;
  const [cardInfo, setCardInfo] = useState<{
    cardNumber: string;
    cvv2: number;
    exp: string;
  }>(props.cardInfo);
  const [cardInfoValid, setcardInfoValid] = useState({
    cardNumber: true,
    cvv2: true,
    exp: true,
  });
  const [showCard, setCard] = useState(false);

  return (
    <div>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${
              !cardInfoValid.cardNumber ? "bg-danger text-white" : ""
            }`}
          >
            <i className="bi bi-credit-card-2-front"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!cardInfoValid.cardNumber ? "error" : ""}`}
            disabled={!props.disabled && showCard ? false : true}
            value={`${
              !showCard
                ? cardInfo.cardNumber
                    .split("")
                    .map((val: string, ind: number, arr: string[]) => {
                      if (ind >= arr.length - 4) {
                        return val;
                      }
                      return "*";
                    })
                    .join("")
                : cardInfo.cardNumber
            }`}
            onChange={
              !props.disabled && !showCard
                ? (evt) => {
                    // tslint:disable-next-line: typedef
                    let temp = { ...cardInfo, cardNumber: evt.target.value };
                    // tslint:disable-next-line: typedef
                    let tempValid = { ...cardInfoValid };
                    if (evt.target.value === "") {
                      tempValid.cardNumber = false;
                    } else {
                      tempValid.cardNumber = true;
                    }

                    setCardInfo(temp);
                    setcardInfoValid(tempValid);
                  }
                : // tslint:disable-next-line: no-empty
                  () => {}
            }
          />
          <Button
            variant="outline-success"
            onClick={() => {
              setCard(!showCard);
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
            className={`${!cardInfoValid.cvv2 ? "bg-danger text-white" : ""}`}
          >
            <i className="bi bi-credit-card-2-back"></i>
          </InputGroup.Text>
          <FormControl
            className={`${!cardInfoValid.cvv2 ? "error" : ""}`}
            disabled={props.disabled}
            value={`${cardInfo.cvv2}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...cardInfo, cvv2: +evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...cardInfoValid };
              if (evt.target.value === "") {
                tempValid.cvv2 = false;
              } else {
                tempValid.cvv2 = true;
              }

              setCardInfo(temp);
              setcardInfoValid(tempValid);
            }}
          />
        </InputGroup>
      </>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            className={`${!cardInfoValid.exp ? "bg-danger text-white" : ""}`}
          >
            MM/YY
          </InputGroup.Text>
          <FormControl
            className={`${!cardInfoValid.exp ? "error" : ""}`}
            disabled={props.disabled}
            value={`${cardInfo.exp}`}
            onChange={(evt) => {
              // tslint:disable-next-line: typedef
              let temp = { ...cardInfo, exp: evt.target.value };
              // tslint:disable-next-line: typedef
              let tempValid = { ...cardInfoValid };
              if (evt.target.value === "") {
                tempValid.exp = false;
              } else {
                tempValid.exp = true;
              }

              setCardInfo(temp);
              setcardInfoValid(tempValid);
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
              Object.assign(profile, resetCard);

              setCardInfo(resetCard);
              setcardInfoValid({
                cardNumber: true,
                cvv2: true,
                exp: true,
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
                cardInfoValid.cardNumber &&
                cardInfoValid.cvv2 &&
                cardInfoValid.exp
              )
            }
            variant="primary"
            onClick={() => {
              // tslint:disable-next-line: typedef
              let profile = props.profile;
              Object.assign(profile, cardInfo);
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
