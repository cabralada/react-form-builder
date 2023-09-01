"use client"

import { store } from "./store"
import { Provider } from "react-redux"

import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  let persistData = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistData}>{children}</PersistGate>
      </Provider>
    </>
  )
}
