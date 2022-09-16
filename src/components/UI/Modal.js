import { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.4",
            zIndex: "99999",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0",
          }}
        ></div>,
        document.getElementById("portal")
      )}
      {ReactDOM.createPortal(
        <div
          style={{
            zIndex: "9999999",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className={props.className}
        >
          {props.children}
        </div>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
