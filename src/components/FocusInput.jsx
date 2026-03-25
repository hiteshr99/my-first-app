import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Auto Focus Input</h2>

      <input
        type="text"
        placeholder="Type here..."
        ref={inputRef}
      />
    </div>
  );
}

export default FocusInput;