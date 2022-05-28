import React from "react";

import "../style.css";
function Faq(props) {
  const [isClick, setClick] = React.useState(true);

  function handleClick() {
    setClick(!isClick);
  }

  const style = {
    color: isClick ? "black" : "",
    fontWeight: isClick ? "400" : "800",
  };

  return (
    <div>
      <section className="question-collection">
        <div className="question-only">
          <p className="question" style={style} onClick={handleClick}>
            {props.info.question}
          </p>
          <span></span>{" "}
        </div>
        {isClick ? "" : props.info.answer}
      </section>
    </div>
  );
}

export default Faq;
