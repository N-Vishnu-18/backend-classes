import React from 'react'
import {useSelector} from 'react-redux'

function Test4() {
  let {counter}=useSelector(state=>state.counter)

  return (
    <div>
            <h1 className="text-center">{counter}</h1>

    </div>
  )
}

export default Test4