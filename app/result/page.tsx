"use client"

import InputForm from "../component/InputForm/inputForm"
import {
  ButtonsActions,
  ConfigInput,
  CustomInputTypes,
} from "../types/customInput"
import { useAppSelector } from "./../redux/store"

export default function Result() {
  const selector = useAppSelector((state) => state.store.store.value.data)

  if (selector === "") {
    return (
      <div>
        No <strong>JSON</strong> added
      </div>
    )
  }

  const dataObject = JSON.parse(selector)

  return (
    <div className="p-4 border-2 border-solid border-gray-400">
      <h1 className="text-2xl">{dataObject.title}</h1>
      <h2 className="text-xl">{dataObject.description}</h2>
      {dataObject.form.length > 0 && (
        <form className="">
          {dataObject.form.map(
            (item: ConfigInput & CustomInputTypes, index: number) => {
              return (
                <div key={index} className="flex space-x-2 mb-3">
                  <label id={item.config.name} className="w-80 text-right">
                    {item.label}
                  </label>

                  <InputForm config={item.config} />
                </div>
              )
            }
          )}

          {dataObject.actions.length > 0 && (
            <div className="flex flex-row-reverse">
              {dataObject.actions.map((item: ButtonsActions, index: number) => {
                return (
                  <input
                    className="bg-gray-100 hover:bg-gray-300 text-black font-bold ml-4 p-4 cursor-pointer rounded disabled:opacity-50 hover:disabled:bg-gray-100"
                    key={index}
                    type={item.type}
                    value={item.label}
                  />
                )
              })}
            </div>
          )}
        </form>
      )}
    </div>
  )
}
