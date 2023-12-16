import "./Button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="https://drive.google.com/file/d/1vb63p2XJG3lqHBEIEtMNCDhYClRv3vnp/view?usp=sharing" className="btn pri" target={"blank"}>
        ENGLISH CV
      </a>
      <a href="https://drive.google.com/file/d/1sBahavt0x7QHoVVg87izw4fFruyRs7Uw/view?usp=sharing" className="btn sec" target={"blank"}>
      SPANISH CV
      </a>
    </div>
  );
}

export default Buttons;
