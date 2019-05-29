import React from "react";

export const AccordionSection = ({ children, title, expanded }) => (
  <>
    <div>{title}</div>
    <div>{expanded && children}</div>
  </>
);
