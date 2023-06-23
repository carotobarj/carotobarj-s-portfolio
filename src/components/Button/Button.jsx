import "./Button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="https://drive.google.com/file/d/1uZWf_hnqFrG0gbOkvmx4mXU2mC21R1RN/view?usp=sharing" className="btn pri" target={"blank"}>
        ENGLISH CV
      </a>
      <a href="https://drive.google.com/file/d/1B6wEvU5zSvVJ5WvsUBOUWPFVFFao6aKS/view" className="btn sec" target={"blank"}>
      SPANISH CV
      </a>
    </div>
  );
}

export default Buttons;
