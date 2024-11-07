import React, { useState } from 'react';
import Question from './Question';
import { Button, Modal, List, Col } from 'antd';

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
                xs={{ span: 0 }}
                sm={{ span: 0 }}
                md={{ span: 6 }}
                lg={{ span: 5 }}
                className="responsive-col"
                onClick={showModal}  >
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
                width="80%" >
                <div className={'questionStack'}>
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
