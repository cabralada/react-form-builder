// import { dataReducer } from 'features/dataSlice.ts';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type InitState = {
  value: Data
}

export type Data = {
  data: string
}

const initialState: InitState = {
  value: {
    data: "",
  },
}

export const data = createSlice({
  name: "STORE_TYPED_DATA",
  initialState,
  reducers: {
    cleanData: () => {
      return {
        ...initialState,
      }
    },
    addData: (state, action: PayloadAction<string>) => {
      return {
        value: {
          data: action.payload,
        },
      }
    },
  },
})

export const { cleanData, addData } = data.actions
export default data
