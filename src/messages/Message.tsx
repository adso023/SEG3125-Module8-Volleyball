import { useState } from "react";
import { Button } from "react-bootstrap";
import { Image } from "./image";
import "./Message.css";

export function Messages(): JSX.Element {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState<JSX.Element[]>([]);

  // tslint:disable-next-line: typedef
  const buildMessage = () => {
    const messages: JSX.Element[] = [
      ...msgs,
      <div className="msgWrapper you">
        <div className="message">
          <div className="text-white member">Me</div>
          <div className="bubble">{msg}</div>
        </div>
      </div>,
      <div className="msgWrapper other">
        <div className="message">
          <div className="text-white member">Instructor John John</div>
          <div className="bubble">
            This is an automated message - realtime chat feature not implemented
          </div>
        </div>
      </div>,
    ];
    setMsg("");
    setMsgs(messages);
  };

  return (
    <div id="messageRoot">
      <h5>Messages</h5>
      <div id="messageDiv" className="d-flex">
        <div id="messageAside">
          <div id="1" className="d-flex viewing">
            <div>
              {/* <img
                width="50"
                height="50"
                src="../../public/message.svg"
                alt="Message"
                title="Message"
              ></img> */}
              <Image />
            </div>
            <div className="messageTile">Instructor: John John</div>
          </div>
        </div>
        <div id="messageView">
          <div id="messageList">
            <div className="msgWrapper you">
              <div className="message">
                <div className="text-white member">Me</div>
                <div className="bubble">Hello</div>
              </div>
            </div>
            <div className="msgWrapper other">
              <div className="message">
                <div className="text-white member">Instructor John John</div>
                <div className="bubble">Hi Derek</div>
              </div>
            </div>
            {msgs}
          </div>
          <div id="messageTextBox" className="d-flex">
            <input
              type="text"
              placeholder="Enter message..."
              value={msg}
              onKeyPress={(evt) => {
                if (evt.key === "Enter") {
                  buildMessage();
                }
              }}
              onChange={(evt) => {
                setMsg(evt.target.value);
              }}
            />
            <Button variant="success" onClick={buildMessage}>
              <i className="bi bi-arrow-up-square-fill"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
