import { useState, useRef, useEffect } from "react";


const useUrlInput = () => {
  const [linkInput, setLinkInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = linkInput === "";
      return;
    }

    if (linkInput === "") {
      setError("Please add a link");
      return;
    }

    setError("");
  }, [linkInput]);

  return [linkInput, setLinkInput, error, setError] as const;
};

export default useUrlInput;