import React, { useState } from "react";
import styles from "./App.module.css";

import { Accordion, AccordionSection, useAccordionState } from "./components";

function App() {
  const accordionProps = useAccordionState([false, true]);
  const [test, setTest] = useState(true);
  const toggleTest = () => {
    setTest(!test);
  };

  return (
    <div className={styles.Wrapper}>
      <Accordion {...accordionProps}>
        <AccordionSection title="section 1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            lobortis iaculis. Donec ornare tellus vel quam convallis, quis
            tristique libero blandit. Morbi quis lacinia urna. Curabitur laoreet
            in tortor ac faucibus. Duis laoreet eros nulla, eget cursus elit
            mollis id. Fusce sagittis dui vitae malesuada imperdiet. In non
            facilisis dui. Duis sit amet nulla eu odio venenatis posuere. Nam
            congue luctus risus nec laoreet. Quisque rutrum porttitor sapien,
            nec iaculis eros pharetra volutpat. Maecenas fringilla ultrices
            massa vitae interdum.
          </p>
        </AccordionSection>
        <AccordionSection title="section 2">
          <p>
            <a href="/">test link</a>
            Suspendisse lobortis diam quis magna faucibus, in volutpat eros
            facilisis. Aliquam ac mattis tellus, vitae tincidunt purus. Sed
            lectus justo, maximus eget egestas eu, congue et enim. Maecenas
            ullamcorper sollicitudin turpis, condimentum interdum nisl. Proin
            leo dolor, varius eu sagittis eu, scelerisque nec dolor. Sed velit
            diam, consectetur vel placerat vel, egestas nec tellus. Ut convallis
            accumsan ipsum id consectetur. Morbi lorem purus, condimentum et
            tellus non, volutpat ultricies risus. Nam pellentesque risus eu odio
            bibendum, ut vehicula arcu convallis. Quisque interdum ligula ac
            vulputate ornare. Praesent condimentum ligula sapien, id placerat
            tellus sollicitudin sit amet. Pellentesque et urna sed sem porttitor
            maximus. Pellentesque ullamcorper ipsum id turpis eleifend,
            dignissim tincidunt dolor lobortis. Maecenas id elit et est vehicula
            imperdiet. In non diam ultrices ex sagittis dapibus nec rutrum eros.
            Nunc id egestas lorem.
          </p>
        </AccordionSection>
        {test && (
          <AccordionSection title="section 3">
            <p>
              <a href="/">test link</a>
              Suspendisse lobortis diam quis magna faucibus, in volutpat eros
              facilisis. Aliquam ac mattis tellus, vitae tincidunt purus. Sed
              lectus justo, maximus eget egestas eu, congue et enim. Maecenas
              ullamcorper sollicitudin turpis, condimentum interdum nisl. Proin
              leo dolor, varius eu sagittis eu, scelerisque nec dolor. Sed velit
              diam, consectetur vel placerat vel, egestas nec tellus. Ut
              convallis accumsan ipsum id consectetur. Morbi lorem purus,
              condimentum et tellus non, volutpat ultricies risus. Nam
              pellentesque risus eu odio bibendum, ut vehicula arcu convallis.
              Quisque interdum ligula ac vulputate ornare. Praesent condimentum
              ligula sapien, id placerat tellus sollicitudin sit amet.
              Pellentesque et urna sed sem porttitor maximus. Pellentesque
              ullamcorper ipsum id turpis eleifend, dignissim tincidunt dolor
              lobortis. Maecenas id elit et est vehicula imperdiet. In non diam
              ultrices ex sagittis dapibus nec rutrum eros. Nunc id egestas
              lorem.
            </p>
          </AccordionSection>
        )}
      </Accordion>
      <br />
      <br />
      <br />
      <button onClick={toggleTest}>toggle</button>
    </div>
  );
}

export default App;
