import { useState } from "react";

const useCount = () => {
  const [counts, setCounts] = useState(0);
  const upCount = () => {
    setCounts(prev => prev + 1);
  }
  return { counts, upCount }
}
export default useCount;