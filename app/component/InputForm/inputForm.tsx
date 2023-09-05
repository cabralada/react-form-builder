import type { ConfigInput } from "@/app/types/customInput"

const InputForm = (props: ConfigInput) => {
  const { config } = props
  return config.type === "textarea" ? (
    <textarea
      readOnly={config.readonly}
      placeholder={config.placeholder}
      name={config.name}
      disabled={config.disabled}
      autoComplete={config.autocomplete}
      autoFocus={config.autofocus}
      form={config.form}
      maxLength={config.maxlength}
      minLength={config.minlength}
      required={config.required}
      value={config.value}
      rows={config.rows}
      cols={config.cols}
      wrap={config.wrap}
      className="border-2 disabled:border-red-600"
    ></textarea>
  ) : (
    <input
      className="border-2 disabled:border-red-600"
      alt={config.alt}
      type={config.type}
      readOnly={config.readonly}
      placeholder={config.placeholder}
      name={config.name}
      disabled={config.disabled}
      autoComplete={config.autocomplete}
      autoFocus={config.autofocus}
      checked={config.checked}
      form={config.form}
      formAction={config.formaction}
      formMethod={config.formmethod}
      formNoValidate={config.formnovalidate}
      formTarget={config.formtarget}
      height={config.height}
      list={config.list}
      max={config.max}
      maxLength={config.maxlength}
      min={config.min}
      minLength={config.minlength}
      multiple={config.multiple}
      pattern={config.pattern}
      required={config.required}
      size={config.size}
      src={config.src}
      step={config.step}
      value={config.value}
      width={config.width}
    />
  )
}

export default InputForm
