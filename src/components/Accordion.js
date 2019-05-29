import React, {
  useRef,
  createContext,
  useContext,
  useState,
  useMemo
} from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.module.css";

const AccordionContext = createContext({
  focusRef: {},
  selected: null,
  expandedAll: [],
  onToggle: undefined,
  onNavigation: () => undefined
});
export const useAccordionContext = () => useContext(AccordionContext);

/**
 * Accordion according to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1
 * see https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
 *
 * Keyboard Support:
 *
```
Space or Enter
  👍 When focus is on the accordion header of a collapsed section, expands the section.
Tab
  👍 Moves focus to the next focusable element.
  👍 All focusable elements in the accordion are included in the page Tab sequence.
Shift + Tab
  👍 Moves focus to the previous focusable element.
  👍 All focusable elements in the accordion are included in the page Tab sequence.
Down Arrow
  👍 When focus is on an accordion header, moves focus to the next accordion header.
  👍 When focus is on last accordion header, moves focus to first accordion header.
Up Arrow
  👍 When focus is on an accordion header, moves focus to the previous accordion header.
  👍 When focus is on first accordion header, moves focus to last accordion header.
Home
  👍 When focus is on an accordion header, moves focus to the first accordion header.
End
  👍 When focus is on an accordion header, moves focus to the last accordion header.
```
 */
export const Accordion = ({ children, expanded, onToggle, ...rest }) => {
  const focusRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const context = useMemo(
    () => ({
      focusRef,
      selected,
      expandedAll: expanded,
      onToggle,
      onNavigation: key => {
        switch (key) {
          case "ArrowDown":
            if (focusRef.current >= React.Children.count(children) - 1) {
              setSelected(0);
            } else {
              setSelected(focusRef.current + 1);
            }
            break;
          case "ArrowUp":
            if (focusRef.current <= 0) {
              setSelected(React.Children.count(children) - 1);
            } else {
              setSelected(focusRef.current - 1);
            }
            break;
          case "Home":
            setSelected(0);
            break;
          case "End":
            setSelected(React.Children.count(children) - 1);
            break;
          default:
        }
      }
    }),
    [selected, setSelected, expanded, onToggle, children]
  );

  return (
    <div
      className={styles.Accordion}
      {...rest}
      onBlur={() => setSelected(null)}
    >
      <AccordionContext.Provider value={context}>
        {React.Children.map(children, (child, index) => {
          if (process.env.NODE_ENV === "development") {
            if (child === null) return;
            if (typeof child !== "object") {
              console.warn(
                `Only AccordionSection and null are allowed as a child of Accordion. Found primitive value: ${child}`
              );
              return;
            }
            if (typeof child.type === "string") {
              console.warn(
                `Only AccordionSection and null are allowed as a child of Accordion. Found ${
                  child.type
                }`
              );
              return;
            }
            if (child.props.index !== undefined) {
              console.warn(
                `Don't provide index param in AccordionSection it is used for internal purposes`
              );
            }
          } else {
            if (!child || !child.props) return child;
          }
          return React.cloneElement(child, {
            ...child.props,
            index
          });
        })}
      </AccordionContext.Provider>
    </div>
  );
};

Accordion.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.bool),
  onToggle: PropTypes.func
};

Accordion.defaultProps = {
  expanded: []
};
