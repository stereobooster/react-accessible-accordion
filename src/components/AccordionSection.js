import React from "react";

export const AccordionSection = ({ children, title, expanded, id }) => {
  const sectionId = `section-${id}`;
  const labelId = `label-${id}`;

  return (
    <>
      <div
        role="button"
        aria-expanded={expanded}
        aria-controls={sectionId}
        id={labelId}
        tabIndex={0}
      >
        {title}
      </div>
      <div
        role="region"
        aria-labelledby={labelId}
        id={sectionId}
        hidden={!expanded}
      >
        {expanded && children}
      </div>
    </>
  );
};
