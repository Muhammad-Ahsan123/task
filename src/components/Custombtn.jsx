import React from 'react'
import { Button } from 'antd'
function Custombtn({ title, shape, icon, width, margin, bgcolor, textColor, border }) {
    console.log(title);

    return (
        <Button style={{ margin: '3vw 10px 0 0', width: '150px', backgroundColor: bgcolor, color: textColor, border: border }} shape={shape}>
            {title ? title : icon}
        </Button>
    )
}

export default Custombtn
