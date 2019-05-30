import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./AccordionSection.module.css";
import { useAccordionContext } from "./Accordion";

export const AccordionSection = ({
  children,
  title,
  id,
  expanded,
  onToggle
}) => {
  const sectionId = `section-${id}`;
  const labelId = `label-${id}`;

  const { focusRef, selected } = useAccordionContext();
  const labelRef = useRef();
  useEffect(() => {
    if (id === selected && labelRef.current) {
      labelRef.current.focus();
    }
  }, [id, selected]);

  return (
    <>
      <div
        role="button"
        aria-expanded={expanded}
        aria-controls={sectionId}
        id={labelId}
        tabIndex={0}
        className={styles.Label}
        onClick={onToggle}
        onKeyDown={e => {
          switch (e.key) {
            case " ":
            case "Enter":
              onToggle();
              break;
            default:
          }
        }}
        onFocus={() => {
          focusRef.current = id;
        }}
        onBlur={() => {
          focusRef.current = null;
        }}
        ref={labelRef}
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

AccordionSection.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func
};
