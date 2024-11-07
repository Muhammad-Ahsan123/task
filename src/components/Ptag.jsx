import React from 'react'

function Ptag({ title, color, fontsize, margin, bgColor, padding, borderR, borderL, display, whitespace, questionno, questiontitle, minnimumwidth, id, border
}) {
    return (
        <>
            <p
                id={id}
                style={{
                    color,
                    fontSize: fontsize,
                    margin,
                    backgroundColor: bgColor,
                    padding,
                    borderRadius: borderR,
                    borderLeft: borderL,
                    border,
                    display,
                    whiteSpace: whitespace,
                    minWidth: minnimumwidth
                }}>{title || questionno || questiontitle}</p>
        </>
    )
}

export default Ptag
