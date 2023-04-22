import React, { ButtonHTMLAttributes } from 'react'

type Props = {
  content: string;
}

const shortenButton = ({content}: Props) => {
  return (
    <button className={` bg-cyan-400  py-4 px-12 rounded-lg font-bold text-white hover:brightness-105 active:brightness-150 `} type="submit">
      {content}
    </button>
  )
}

export default shortenButton;