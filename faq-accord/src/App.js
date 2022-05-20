import React from "react";
import data from "./data";
import Faq from "./Components/Faq";
import "./style.css";
import womem from "./images/women.svg";
function App() {
  return (
    <main>
      <div className="wrapper">
        <div className="image-wrapper">
          <img src={womem} alt="women illustrate with laptop" />
        </div>
        <section>
          <h1>FAQ</h1>
          {data.map((data) => (
            <Faq key={data.id} info={data} />
          ))}
        </section>
      </div>
    </main>
  );
}
export default App;
