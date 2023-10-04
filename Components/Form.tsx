'use client'
import React from 'react'
type Props = {}
//option to select from 1 to 10
import Slider from 'react-rangeslider'

handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
const Form = (props: Props) => {
    const [value, setValue] = React.useState(0);
    return (
    <div className='justify-center items-center flex flex-col'>
        
            <label htmlFor="name">Question no 1</label>
            <div className="flex  w-64 m-auto items-center h-32 justify-center">
            <Slider
                value={10
                }
                orientation="vertical"
                onChange={this.handleOnChange}
            />
            </div>
    
    </div>
  )
}

export default Form