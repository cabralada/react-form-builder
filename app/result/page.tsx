"use client"

import { useAppSelector } from "./../redux/store"

export default function Result() {
  const selector = useAppSelector((state) => state.store.store.value.data)

  return (
    <>
      <h1>REDUX: {selector}</h1>
      <div>Result</div>
    </>
  )
}
