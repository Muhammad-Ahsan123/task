import React from 'react'
import { Button } from 'antd'
function Custombtn({ title, shape, icon, width, margin, bgcolor, textColor, border }) {
    return (
        <Button className={'customBtn'} style={{
            width,
            margin,
            backgroundColor: bgcolor,
            color: textColor,
            border
        }} shape={shape}>
            {title ? title : icon}
        </Button>
    )
}

export default Custombtn
