// import React from 'react'
// import Ptag from './Ptag'

// function Navbar() {
//     return (
//         <>
//             <div style={{
//                 width: '100%',
//                 margin: 'auto',
//                 justifyContent: 'space-between',
//                 display: 'flex',
//                 // backgroundColor : 'blue'
//             }}>

//                 <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
//                     <span style={{
//                         background: '#042F42', borderRadius: '3px', width: '33px', height: '32px'
//                     }}></span>
//                     <h2 style={{ padding: '0 15px', color: '#2E2E2E' }}>NUCES Assessment</h2>
//                     <Ptag title={'UX Design Test'} borderL={'1px solid gray'} padding={'0 0 0 10px'} color={'#8E8E8E'} />
//                 </div>
//                 <div style={{
//                     backgroundColor: '#FAFAF8', display: 'flex', alignItems: 'center', borderRadius: '48px', padding: '0 22px', whiteSpace: 'nowrap'
//                 }}>
//                     <span style={{
//                         background: 'pink', borderRadius: '50%', width: '33px', height: '32px', display: 'block', marginRight: '8px'
//                     }}></span>
//                     <div >
//                         <Ptag title={'Leave Assessment'} color={'black'} fontsize={'16px'} margin={'0px'} />

//                         <Ptag title={'your assessment will be save'} color={'black'} fontsize={'12px'} margin={'0px'} />
//                     </div>
//                     <div>
//                         <h3 style={{ color: 'black', borderLeft: '1px solid black', padding: '0 10px', marginLeft: '10px' }}>02:42:00</h3>
//                     </div>
//                     <Ptag title={'Time Left'} color={'rgb(49, 96, 68)'} bgColor={'#D9E6DC'} padding={'5px 11px'} borderR={'23px'} />
//                 </div>
//             </div >
//         </>
//     )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import { Col, Row, Avatar, Divider, Typography, Modal } from 'antd';

const { Title } = Typography;
import Ptag from './Ptag';


function Navbar() {

    const initialTime = 1* 60 + 20; // 2 hours, 42 minutes in seconds second mint (mint to sec )
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) return; // Stop timer when it reaches 0

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 1) {
                    clearInterval(timer); // Stop the timer when it reaches 0
                    showModal();
                }
                return prevTime - 1;
            });
        }, 1000); // Update every second

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Format time as HH:MM:SS
    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    // Show the modal when the timer reaches 0
    const showModal = () => {
        setModalVisible(true);
    };

    // Handle modal ok button click
    const handleOk = () => {
        setModalVisible(false);
    };

    // Handle modal cancel button click
    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <Row
            align="middle"
            justify="space-between"
            style={{
                width: '100%',
                margin: 'auto',
                padding: '10px 20px',
                flexWrap: 'wrap',
                rowGap: '10px', // for spacing on smaller screens
            }}
        >
            {/* Left Side: Logo and Title */}
            <Col xs={24} sm={24} md={8} lg={10}>
                <Row align="middle" wrap={false}>
                    <Avatar shape="square" size={32} style={{ backgroundColor: '#042F42' }} />
                    <Title level={4} style={{ margin: '0 15px', color: '#2E2E2E' }}>NUCES Assessment</Title>
                    <Ptag title="UX Design Test" borderL="1px solid gray" padding="0 0 0 10px" color="#8E8E8E" />
                </Row>
            </Col>

            {/* Right Side: Profile and Timer */}
            {/* <Col xs={24} sm={19} md={14} lg={12} xl={9} xxl={0}>
                <Row
                    align="middle"
                    wrap={false}
                    style={{
                        padding: '10px 5px',
                        borderRadius: '48px',
                        backgroundColor: '#FAFAF8',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar style={{ backgroundColor: 'pink', marginRight: '8px' }} size={32} />

                    <Col>
                        <Ptag title="Leave Assessment" color="black" fontsize="16px" margin="0px" />
                        <Ptag title="Your assessment will be saved" color="black" fontsize="12px" margin="0px" />
                    </Col>

                    <Divider type="vertical" style={{ height: 'auto', borderColor: 'black', margin: '0 10px' }} />

                    <Col>
                        <Title level={4} style={{ color: 'black', margin: '0 10px' }}>02:42:00</Title>
                    </Col>

                    <Ptag title="Time Left" color="rgb(49, 96, 68)" bgColor="#D9E6DC" padding="5px 6px" borderR="23px" />
                </Row>
            </Col> */}


            <Col xs={24} sm={19} md={14} lg={10} xl={9} xxl={8}>
                <Row
                    align="middle"
                    wrap={false}
                    style={{
                        padding: '10px 5px',
                        borderRadius: '48px',
                        backgroundColor: 'rgb(202, 202, 201)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar style={{ backgroundColor: 'pink', marginRight: '8px' }} size={32} />
                    <Col>
                        <Ptag title="Leave Assessment" color="black" fontsize="16px" margin="0px" />
                        <Ptag title="Your assessment will be saved" color="black" fontsize="12px" margin="0px" />
                    </Col>

                    <Divider type="vertical" style={{ height: 'auto', borderColor: 'black', margin: '0 10px' }} />

                    <Col>
                        <Title level={4} style={{ color: 'black', margin: '0 10px' }}>
                            {formatTime(timeLeft)}
                        </Title>
                    </Col>

                    <Ptag title="Time Left" color="rgb(78, 117, 94)" bgColor="rgb(147, 210, 162)" padding="5px 6px" borderR="23px" />
                </Row>
            </Col>

            <Modal
                title="Time's Up!"
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="OK"
                cancelText="Close"
            >
                <p>Your assessment time has expired. Please submit your answers!</p>
            </Modal>
        </Row>


    );
}

export default Navbar;
