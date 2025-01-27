import Checkbox from '../components/Checkbox'

export default function CheckboxExample() {
  return (
    <div className="rounded-base border-2 border-black bg-main p-10 py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <Checkbox item="item 1" />
      <Checkbox item="item 2" />
      <Checkbox item="item 3" />
    </div>
  )
}
