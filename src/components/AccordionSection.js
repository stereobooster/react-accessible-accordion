import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./AccordionSection.module.css";
import { useAccordionContext } from "./Accordion";

export const AccordionSection = ({ children, title, id }) => {
  const sectionId = `section-${id}`;
  const labelId = `label-${id}`;

  const {
    focusRef,
    selected,
    expandedAll,
    onToggle,
    onNavigation
  } = useAccordionContext();
  const expanded = expandedAll[id];
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
        onClick={() => onToggle && onToggle(id)}
        onKeyDown={e => {
          switch (e.key) {
            case " ":
            case "Enter":
              e.preventDefault();
              onToggle && onToggle(id);
              break;
            case "ArrowDown":
              e.preventDefault();
              onNavigation("ArrowDown");
              break;
            case "ArrowUp":
              e.preventDefault();
              onNavigation("ArrowUp");
              break;
            case "Home":
              e.preventDefault();
              onNavigation("Home");
              break;
            case "End":
              e.preventDefault();
              onNavigation("End");
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
  title: PropTypes.string.isRequired
};
