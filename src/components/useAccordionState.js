import { useState } from "react";

export const useAccordionState = intialState => {
  const [expanded, setExpanded] = useState(intialState);
  const onToggle = id => {
    setExpanded(
      Object.assign([], expanded, {
        [id]: !expanded[id]
      })
    );
  };
  return { expanded, onToggle };
};
