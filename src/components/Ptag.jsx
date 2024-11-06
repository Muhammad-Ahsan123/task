import React from 'react'

function Ptag({ title, color, fontsize, margin, bgColor, padding, borderR, borderL , display , whitespace
 }) {
    return (
        <>
            <p style={{ color: color, fontSize: fontsize, margin: margin, backgroundColor: bgColor, padding: padding, borderRadius: borderR, borderLeft: borderL , display : display  , whiteSpace : whitespace}}>{title}</p>
        </>
    )
}

export default Ptag
