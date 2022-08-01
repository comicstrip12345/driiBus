import React from 'react'

const Receipt =React.forwardRef((props,ref) => {
    return (
        <div ref={ref}>Receipt</div>
    )
})

export default Receipt