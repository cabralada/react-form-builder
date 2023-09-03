"use client"

import { ButtonsActions, CustomInputTypes } from "../types/customInput"
import { useAppSelector } from "./../redux/store"

export default function Result() {
  const selector = useAppSelector((state) => state.store.store.value.data)
  const obj = JSON.parse(selector)

  return (
    <>
      <h1>REDUX: {selector}</h1>
      <div className="p-4 border-2 border-solid border-gray-400">
        <h1 className="text-2xl">{obj.title}</h1>
        <h2 className="text-xl">{obj.description}</h2>

        <form className="">
          {obj.form.map((item: CustomInputTypes, index: number) => {
            return (
              <div key={index} className="flex space-x-2 mb-3">
                <label className="w-80 text-right">{item.label}</label>
                <input type="text" className="border-2" />
              </div>
            )
          })}

          <div className="flex flex-row-reverse">
            {obj.actions.map((item: ButtonsActions, index: number) => {
              return (
                <input
                  className="bg-gray-100 hover:bg-gray-300 text-black font-bold ml-4 p-4 rounded disabled:opacity-50 hover:disabled:bg-gray-100"
                  key={index}
                  type={item.type}
                  value={item.label}
                />
              )
            })}
          </div>
        </form>
      </div>
    </>
  )
}
