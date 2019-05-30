# Accessible React accordion component

## Accessibility

Component is implemented according to [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html).

Keyboard Support:

- Space or Enter
  - When focus is on the accordion header of a collapsed section, expands the section.
- Tab
  - Moves focus to the next focusable element.
  - All focusable elements in the accordion are included in the page Tab sequence.
- Shift + Tab
  - Moves focus to the previous focusable element.
  - All focusable elements in the accordion are included in the page Tab sequence.
- Down Arrow
  - When focus is on an accordion header, moves focus to the next accordion header.
  - When focus is on last accordion header, moves focus to first accordion header.
- Up Arrow
  - When focus is on an accordion header, moves focus to the previous accordion header.
  - When focus is on first accordion header, moves focus to last accordion header.
- Home
  - When focus is on an accordion header, moves focus to the first accordion header.
- End
  - When focus is on an accordion header, moves focus to the last accordion header.

## Example of Usage

```js
import React from "react";

import { Accordion, AccordionSection, useAccordionState } from "./components";

function App() {
  const accordionProps = useAccordionState({ id2: true });
  return (
    <Accordion {...accordionProps}>
      <AccordionSection title="section 1" id="id1">
        Lorem ipsum dolor sit amet
      </AccordionSection>
      <AccordionSection title="section 2" id="id2">
        Suspendisse lobortis diam quis magna faucibus
      </AccordionSection>
    </Accordion>
  );
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
