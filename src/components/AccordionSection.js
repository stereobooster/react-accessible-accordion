import React from "react";
import styles from "./AccordionSection.module.css";

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
        className={styles.Label}
      >
        {title}
        <span aria-hidden={true}>{expanded ? "▲" : "▼"}</span>
      </div>
      <div
        role="region"
        aria-labelledby={labelId}
        id={sectionId}
        hidden={!expanded}
        className={styles.Panel}
      >
        {expanded && children}
      </div>
    </>
  );
};
