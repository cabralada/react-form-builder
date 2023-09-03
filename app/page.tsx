"use client"

import { useDispatch } from "react-redux"
import { addData, cleanData } from "./redux/features/data-slice"
import { AppDispatch, useAppSelector } from "./redux/store"
import { FormEvent, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import prettyPrint from "@/utility/pretifiy"

export default function Home() {
  const router = useRouter()
  const selector = useAppSelector((state) => state.store.store.value.data)
  const textareaContent = useRef()

  const [text, setText] = useState<string>(selector)
  const [isError, setIsError] = useState(false)
  const [errorText, setErrorText] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const handleCleanData = () => {
    setText("")
    dispatch(cleanData())
    console.log(textareaContent.current)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleApply = () => {
    try {
      const pretifiedText = prettyPrint(text)

      setErrorText("")
      setIsError(false)

      text && dispatch(addData(pretifiedText))
      text && router.replace("/result")
    } catch (error) {
      setIsError(true)
      setErrorText("Invalid JSON")
    }
  }

  const handleFormatJSON = () => {
    try {
      const pretifiedText = prettyPrint(text)
      setText(pretifiedText)
      setIsError(false)
    } catch (error) {
      setIsError(true)
      setErrorText("Invalid JSON")
    }
  }

  const isValidinput = text?.length === 0

  return (
    <form onSubmit={handleSubmit}>
      {isError && (
        <p className="mb-3 p-2 text-white text-xs italic bg-red-500">
          {errorText}
        </p>
      )}

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
          onClick={handleFormatJSON}
          className="w-full bg-gray-100 hover:bg-gray-300 text-black font-bold p-4 rounded disabled:opacity-50 hover:disabled:bg-gray-100"
        >
          Format
        </button>

        <button
          disabled={isValidinput}
          onClick={handleApply}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded disabled:opacity-50 hover:disabled:bg-blue-500"
        >
          Apply
        </button>
      </div>
    </form>
  )
}
