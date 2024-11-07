import React from 'react'

function IconDiv({ shape, icon }) {
    return (
        <>
            <div className={'iconDiv'} shape={shape}>
                {icon}
            </div>
        </>
    )
}
export default IconDiv
