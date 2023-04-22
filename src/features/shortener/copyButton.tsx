import React from "react";

type Props = {
  children: string;
  url: string;
  index: number;
  active: boolean;
  setActive: (n:number|null) => void;
};

const CopyButton: React.FC<Props> = ({ children, url, index, active, setActive}) => {
 
  const styles = {
    default: "bg-cyan-400 w-full py-2 px-8 rounded-lg font-bold text-white hover:brightness-105 active:brightness-150 resize-none",
    clicked: "bg-violet-700"
  }

  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setActive(index)
  }

  return (

    <button
      className={`${styles.default} ${active && styles.clicked}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CopyButton;
