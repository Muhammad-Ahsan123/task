import React, { useState } from 'react'
// import { Button, Modal } from 'antd';

function Question({ questionno, questiontitle, border, customStyle, margin, padding }) {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };
    return (
        <>
            <div style={{ padding: padding, borderBottom: border ? '1px solid gray' : 'none', margin: margin , cursor : 'pointer'  }} >
                {questionno ? <p style={{ margin: '0', fontSize: '16px', fontWeight: '400' }}>Question 0{questionno}</p> : null}
                <p style={{ margin: '0', fontSize: customStyle , color : 'black' }}>{questiontitle}</p>
            </div>
            {/* <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h3>Question no 0{questionno}</h3>
                <p>{questiontitle}</p>
            </Modal> */}
        </>
    )
}

export default Question
