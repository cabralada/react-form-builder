export default function prettyPrint(value: string) {
  const data = JSON.parse(value)
  const prettyJSON = JSON.stringify(data, undefined, 4)

  return prettyJSON
}
