// import React, { useState } from 'react'
// import Question from './Question'
// import { Button, Modal } from 'antd';


// function QuestionStack() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const showModal = () => {
//         setIsModalOpen(true);
//     };
//     const handleOk = () => {
//         setIsModalOpen(false);
//     };
//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };
//     return (
//         <>
//             <div style={{ minWidth: '23%', maxWidth: '51%', marginRight: '5vw', backgroundColor: '#FAFAFA', color: 'black', borderRadius: '16px', padding: '1vw' }} onClick={showModal}>
//                 <Question questionno={'1'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 <Question questionno={'2'} questiontitle={'What UX challenges is the toughest above...?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 <Question questionno={'3'} questiontitle={'How can we resolve the existing app design..'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 <Question questionno={'4'} questiontitle={'is UX different from UX?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 <Question questionno={'5'} questiontitle={'What is user perosna and how it will help is..'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 <Question questionno={'6'} questiontitle={'Tell any UX  law ?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 <Question questionno={'7'} questiontitle={'What is lean Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//             </div>

//             <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 <div style={{ minWidth: '100%', maxWidth: '100%', backgroundColor: '#FAFAFA', color: 'black', borderRadius: '16px', marginTop: '2vw', overflow: 'hidden' }} onClick={showModal}>
//                     <Question questionno={'1'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                     <Question questionno={'2'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                     <Question questionno={'3'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                     <Question questionno={'4'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                     <Question questionno={'5'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                     <Question questionno={'6'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                     <Question questionno={'7'} questiontitle={'What is UX UI Design?'} border='true' customStyle={'11px'} margin={'0px 2vw;'} padding={'1vw'} />
//                 </div>
//             </Modal >
//         </>
//     )
// }

// export default QuestionStack

import React, { useState } from 'react';
import Question from './Question';
import { Button, Modal, List, Col } from 'antd';
// import '../'


function QuestionStack() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const questions = [
        { questionno: '1', questiontitle: 'What is UX UI Design?' },
        { questionno: '2', questiontitle: 'What UX challenges is the toughest above...?' },
        { questionno: '3', questiontitle: 'How can we resolve the existing app design..' },
        { questionno: '4', questiontitle: 'Is UX different from UX?' },
        { questionno: '5', questiontitle: 'What is user persona and how will it help?' },
        { questionno: '6', questiontitle: 'Tell any UX law?' },
        { questionno: '7', questiontitle: 'What is lean Design?' }
    ];

    return (
        <>
            <Col
                xs={{ span: 0 }}  // Full width on extra-small screens
                sm={{ span: 0 }}  // Half width on small screens
                md={{ span: 6 }}   // One-third width on medium screens
                lg={{ span: 5 }}   // One-fourth width on large screens
                className="responsive-col"
                onClick={showModal}
            >
                <List
                    dataSource={questions}
                    renderItem={(item) => (
                        <List.Item>
                            <Question
                                questionno={item.questionno}
                                questiontitle={item.questiontitle}
                                customStyle="11px"
                            />
                        </List.Item>
                    )}
                />
            </Col>

            <Modal
                title="Questions"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                bodyStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                width="80%"  // Adjust width of the modal for responsiveness
            >
                <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <List
                        dataSource={questions}
                        renderItem={(item) => (
                            <List.Item>
                                <Question
                                    questionno={item.questionno}
                                    questiontitle={item.questiontitle}
                                    customStyle="11px"
                                    margin="0px 2vw"
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </Modal>
        </>
    );
}

export default QuestionStack;
