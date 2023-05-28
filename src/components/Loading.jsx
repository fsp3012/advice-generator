import React, { useState } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const Loading = (props) => {
    const [color, setcolor] = useState('hsl(150, 100%, 66%)')
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "cyan",
      };
  return (
    <div>
        <ClimbingBoxLoader
        color={color}
        loading={props.newLoading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading