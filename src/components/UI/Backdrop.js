import ReactDOM from "react-dom";

const Backdrop = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.4",
            zIndex: "10",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0"
          }}
        ></div>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default Backdrop;
