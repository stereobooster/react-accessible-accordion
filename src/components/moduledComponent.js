import React from "react";

// Like styled-components but for css-modules
export const styled = (name, styles) => {
  if (styles[name] === undefined) {
    console.warn(`Class name is missing ${name}`);
  }
  const component = React.forwardRef(({ children, ...rest }, ref) => (
    <div className={styles[name]} {...rest} ref={ref}>
      {children}
    </div>
  ));
  component.displayName = `${name}💅`;
  return component;
};
