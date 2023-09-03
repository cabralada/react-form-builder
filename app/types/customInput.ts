export interface CustomInputTypes {
  type: CustomInput_Type
  accept?: string
  alt: string
  autocomplete?: string
  autofocus?: string
  checked?: string
  dirname?: string
  disabled?: string
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: string
  formtarget?: string
  height?: string
  list?: string
  max?: string
  maxlength?: string
  min?: string
  minlength?: string
  multiple?: string
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: string
  required?: string
  size?: string
  src?: string
  step?: string
  value?: string
  width?: string
}

enum CustomInput_Type {
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
}
