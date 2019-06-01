import nanoid from "nanoid";
import { useState } from "react";

export const useId = () => {
  const [id] = useState(() => nanoid(5));
  return id;
};
