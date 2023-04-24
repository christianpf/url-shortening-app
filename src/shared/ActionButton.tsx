import React from 'react'

type Props = {
  children: string;
  url: string;
  isModal?: boolean;
  addedClases?: string;
}

const ActionButton = ({children, url, isModal, addedClases}: Props) => {

  const styleModal = isModal ? "w-full mx-2 hover:brightness-105 active:brightness-110" : "hover:opacity-75 active:opacity-50";

  return (
    <button className={`${styleModal} bg-cyan-400  py-2 px-6 rounded-full font-bold text-white ${addedClases}`}>
      {children}
    </button>
  )
}

export default ActionButton