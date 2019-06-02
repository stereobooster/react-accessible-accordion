import nanoid from "nanoid";
import { useMemo } from "react";

export const useId = (id) => {
  return useMemo(() => id === undefined ? nanoid(5) : id, [id]);
};
