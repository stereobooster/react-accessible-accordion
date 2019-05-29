import React from "react";
import { Accordion } from "./components/Accordion";
import { AccordionSection } from "./components/AccordionSection";

function App() {
  return (
    <>
      <Accordion>
        <AccordionSection title="section 1">content 1</AccordionSection>
        <AccordionSection title="section 1" expanded>
          content 2
        </AccordionSection>
      </Accordion>
    </>
  );
}

export default App;
