import React from 'react'

type Props = {
  content: string;
  url: string;
  isModalLink?: boolean;
}

const NavLink = ({content, url, isModalLink}: Props) => {

  const hoverEffect = isModalLink ? "hover:text-gray-400" : "hover:text-black";

  return (
    <a href={url} className={`font-bold ${hoverEffect}`}>{content}</a>
  )
}

export default NavLink