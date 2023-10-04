import React from 'react'

type Props = {
    id: number;
    arr: Array<number>;
}

const Question = (props: Props) => {
    var id = props.id;
    var arr = props.arr;
    var [value, setValue] = React.useState(id);
  return (
    <div>
    <label className="text-xl">How satisfied are you with your job?</label>
    <input
      className="w-full"
      type="range"
      min="1"
      max="10"
      value={value}
      onChange={
        (event) => {
            setValue(Number(event.target.value))
            arr[id] = Number(event.target.value)
        }
    }
    />
    <output className="text-xl">{value}</output></div>
  )
}

export default Question