import React, { useState, useEffect } from 'react';
import { Col, Row, Avatar, Divider, Typography, Modal } from 'antd';
import Ptag from './Ptag';



function Navbar() {
    const { Title } = Typography;

    const initialTime = 1 * 60 + 20; // 2 hours, 42 minutes in seconds second mint (mint to sec )
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

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };


    const showModal = () => {
        setModalVisible(true);
    };
    const handleOk = () => {
        setModalVisible(false);
    };
    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <Row
            align="middle"
            justify="space-between"
            style={{
                width: '98%',
                margin: 'auto',
                padding: '10px 1vw',
                flexWrap: 'wrap',
                rowGap: '10px',
            }}
        >
            <Col xs={24} sm={24} md={8} lg={10}>
                <Row align="middle" wrap={false}>
                    <Avatar shape="square" size={32} style={{ backgroundColor: '#042F42', minWidth: '32px' }} />
                    <Title level={4} style={{ margin: '0 15px', color: '#2E2E2E', whiteSpace: 'nowrap' }}>NUCES Assessment</Title>
                    <Ptag classname={'borderLeft'} title="UX Design Test" padding="0 0 0 10px" color="#8E8E8E" minnimumwidth={'92px'} />
                </Row>
            </Col>


            <Col xs={24} sm={19} md={14} lg={10} xl={9} xxl={8} className='main-nav-right main-nav-right-for-lg'>
                <Row
                    className='nav-right nav-right-for-lg'
                    align="middle"
                    wrap={false}
                    style={{
                        padding: '10px 0px',
                        borderRadius: '48px',
                        backgroundColor: '#f7f7f7',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar style={{ backgroundColor: 'pink', marginRight: '8px' }} size={32} />
                    <Col>
                        <Ptag className={'maintitle'} title="Leave Assessment" color="black" fontsize="16px" margin="0px" />
                        <Ptag className={'bottomTitle'} title="Your assessment will be saved" color="black" fontsize="12px" margin="0px" />
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
                cancelText="Close" >
                <Ptag title={'Your assessment time has expired. Please submit your answers!'} />
            </Modal>
        </Row>
    );
}
export default Navbar;