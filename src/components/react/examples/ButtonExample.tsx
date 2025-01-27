export default function ButtonExample() {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    >
      Button
    </button>
  )
}
