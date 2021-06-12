import Accordion from "./Accordion";
import "./Accordion.css";
import React, { useState } from "react";

function Wrapper() {
  const [active, setActive] = useState("");

  return (
    <div className="Wrapper">
      <Accordion
        questions="Question number 0"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
      <Accordion
        questions="Question number 1"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
        />
      <Accordion
        questions="Question number 2"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
        />
      <Accordion
        questions="Question number 3"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
        />
      <Accordion
        questions="Question number 4"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
      <Accordion
        questions="Question number 5"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
      <Accordion
        questions="Question number 6"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
      <Accordion
        questions="Question number 7"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
      <Accordion
        questions="Question number 8"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
      <Accordion
        questions="Question number 9"
        answers="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        active={active} setActive={setActive}
      />
    </div>
  );
}

export default Wrapper;
