import { useState } from "react";

export function Button() {
  const [btnState, setBtnState] = useState<boolean>(true);

  return (
    <button onClick={() => setBtnState((prev) => !prev)} className="button">
      {btnState ? "On" : "Off"}
    </button>
  );
}
