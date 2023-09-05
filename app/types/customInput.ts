type CustomInput_Type =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "textarea"

export interface JSONForm {
  title: string
  desicription: string
  form: CustomInputTypes[]
  actions: ButtonsActions[]
}

export interface CustomInputTypes {
  label: string
}

export interface ConfigInput {
  config: CustomInputTypesConfig
}

export interface ButtonsActions {
  type: string
  label: string
}
export interface CustomInputTypesConfig {
  type: CustomInput_Type
  accept?: string
  alt: string
  autocomplete?: "on" | "off"
  autofocus?: boolean
  checked?: boolean
  disabled?: boolean
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: boolean
  formtarget?: string
  height?: string
  list?: string
  max?: string
  maxlength?: number
  min?: string
  minlength?: number
  multiple?: boolean
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  size?: number
  src?: string
  step?: string
  value?: string
  width?: string
  cols?: number
  wrap?: "hard" | "soft"
  rows?: number
}
