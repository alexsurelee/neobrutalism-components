import RadioGroup from '../components/RadioGroup'

export default function RadioGroupExample() {
  return (
    <div className="rounded-base border-2 border-black bg-main p-10 py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <RadioGroup items={['item 1', 'item 2', 'item 3']} />
    </div>
  )
}
