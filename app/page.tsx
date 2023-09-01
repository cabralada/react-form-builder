export default function Home() {
  return (
    <>
      <p className="mb-3 p-2 text-white text-xs italic bg-red-500">Error...</p>
      <textarea className="resize-none mx-auto w-full h-[calc(60vh)] max-h-[calc(60vh)] box-border border-solid border-2 border-sky-500" />

      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded">
        Apply
      </button>
    </>
  )
}
