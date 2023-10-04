import React from 'react'

type Props = {
  index: number;
  arr: Array<any>;
  title: string;
}

const Question = (props: Props) => {
    var {index, arr, title} = props;
    var [value, setValue] = React.useState("0");
  return (
    <div>
    <label className="text-xl">{title}</label>
    <input
      className="w-full"
      type="range"
      min="1"
      max="10"
      value={value}
      onChange={
        (event) => {
            setValue(event.target.value)
            arr[index] = event.target.value

        }
    }
    />
    <output className="text-xl">{value}</output></div>
  )
}

export default Question