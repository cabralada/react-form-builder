"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
  const pathName = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = useState(pathName)

  const defaultStyle = "p-2 border-solid border-2 border-b-[0px]"
  const activeStyle = "bg-white border-white font-[600]	"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveItem((e.target as HTMLAnchorElement).pathname)
    router.push((e.target as HTMLAnchorElement).pathname)
  }

  const isLinkActive = (itemName: string) =>
    activeItem === itemName ? activeStyle : ""

  useEffect(() => {
    setActiveItem(pathName)
  }, [pathName])

  return (
    <div className="flex">
      <a
        className={`${defaultStyle} ${isLinkActive("/")}`}
        href="/"
        onClick={handleClick}
      >
        Config
      </a>
      <a
        className={`${defaultStyle} ${isLinkActive("/result")}`}
        href="/result"
        onClick={handleClick}
      >
        Result
      </a>
    </div>
  )
}
