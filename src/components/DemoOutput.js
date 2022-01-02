import MyParagraph from "./MyParagraph"
import React from 'react'

const DemoOutput = (props) => {
    console.log('IS RUNNING')

    return(
        <MyParagraph>{props.show ? 'This is output' : ''}</MyParagraph>
    )
}

export default React.memo(DemoOutput)