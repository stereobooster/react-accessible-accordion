import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./AccordionSection.module.css";
import { useAccordionContext } from "./Accordion";
import { styled } from "./moduledComponent";

const Label = styled("Label", styles);
Label.defaultProps = {
  role: "button"
};
const Panel = styled("Panel", styles);
Panel.defaultProps = {
  role: "region"
};

export const AccordionSection = ({ children, title, id }) => {
  const sectionId = `section-${id}`;
  const labelId = `label-${id}`;

  const { focusRef, selected, expandedAll, onToggle } = useAccordionContext();
  const expanded = expandedAll[id];
  const labelRef = useRef();
  useEffect(() => {
    if (id === selected && labelRef.current) {
      labelRef.current.focus();
    }
  }, [id, selected]);

  return (
    <>
      <Label
        aria-expanded={expanded}
        aria-controls={sectionId}
        id={labelId}
        tabIndex={0}
        onClick={() => onToggle && onToggle(id)}
        onKeyDown={e => {
          switch (e.key) {
            case " ":
            case "Enter":
              onToggle && onToggle(id);
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
      </Label>
      <Panel aria-labelledby={labelId} id={sectionId} hidden={!expanded}>
        {expanded && children}
      </Panel>
    </>
  );
};

AccordionSection.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired
};
