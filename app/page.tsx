"use client"

import { useDispatch } from "react-redux"
import { addData, cleanData } from "./redux/features/data-slice"
import { AppDispatch, useAppSelector } from "./redux/store"
import { FormEvent, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const selector = useAppSelector((state) => state.store.store.value.data)
  const textareaContent = useRef()

  const [text, setText] = useState<string>(selector)
  const dispatch = useDispatch<AppDispatch>()

  const handleCleanData = () => {
    setText("")
    dispatch(cleanData())
    console.log(textareaContent.current)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    text && dispatch(addData(text))
    text && router.replace("/result")
  }

  const isValidinput = text?.length === 0

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-3 p-2 text-white text-xs italic bg-red-500">Error...</p>
      <textarea
        ref={textareaContent.current}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="resize-none mb-4 mx-auto w-full h-[calc(60vh)] max-h-[calc(60vh)] box-border border-solid border-2 border-sky-500"
      />

      <div className="flex space-x-2">
        <button
          disabled={isValidinput}
          onClick={handleCleanData}
          className="w-full bg-gray-100 hover:bg-gray-300 text-black font-bold p-4 rounded disabled:opacity-50 hover:disabled:bg-gray-100"
        >
          Clean
        </button>

        <button
          disabled={isValidinput}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded disabled:opacity-50 hover:disabled:bg-blue-500"
        >
          Apply
        </button>
      </div>
    </form>
  )
}
