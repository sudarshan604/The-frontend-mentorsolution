import React from "react";

import "../style.css";
function Faq(props) {
  const [isClick, setClick] = React.useState(true);

  function handleClick() {
    setClick(!isClick);
  }
  console.log(props.info);
  return (
    <div>
      <section className="question-collection">
        <p onClick={handleClick}>{props.info.question}</p>
        {isClick ? "" : props.info.answer}
      </section>
    </div>
  );
}

export default Faq;
