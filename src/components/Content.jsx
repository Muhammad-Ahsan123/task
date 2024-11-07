import React, { useState } from 'react';
import { Row, Col, Radio, Space, List } from 'antd';
import Custombtn from './Custombtn';
import Answer from './Answer';
import Question from './Question';
import Ptag from './Ptag';

function Content() {


    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };


    const questions = [
        {
            "questionno": 1,
            "questiontitle": "What is UX design?",
            "answers": [
                { "id": "A", "answer": "A technique to build user experience & user interface using best practices" },
                { "id": "B", "answer": "A technique to help developers in building design of application" },
                { "id": "C", "answer": "A design-specific thing not related to development purpose" },
                { "id": "D", "answer": "All of the above" }
            ]
        }
    ];



    return (
        <Row justify="center" className={'contentRow'}>
            <Col xs={24} sm={24} md={20} lg={24}>
                <Ptag
                    title={'Question 01 / 20'}
                    bgColor={'white'}
                    padding={'8px 13px'}
                    display={'inline-block'}
                    color={'black'}
                    borderR={'20px'}
                    border={'1px solid rgba(47, 68, 73, 0.25)'}
                />
                <Question questiontitle="What is UX UI Design?" customStyle="40px" />

                {/* <Question id={'questionHeading'} questiontitle={'What is UX UI Design?'} customStyle={'40px'} /> */}

                <div className={'refrenceDiv'}>
                    <span></span>
                    <Ptag title={'See Reference Image'} />
                </div>
                <List
                    dataSource={questions}
                    renderItem={(item) => (
                        <List.Item>
                            <div>
                                <Radio.Group style={{ width: '100%' }}
                                    onChange={(e) => handleSelect(e.target.value)}
                                    value={selectedValue}
                                >
                                    <Space direction="vertical" style={{ width: '100%' }}>
                                        {item.answers.map((answer) => (
                                            <Radio key={answer.id} value={answer.id}
                                                className={`radioStyle ${selectedValue === answer.id ? 'radioStyle-active' : ''}`}
                                            >
                                                <Answer answer={answer.answer} />
                                            </Radio>
                                        ))}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </List.Item>
                    )}
                />

                <Row gutter={[16, 16]} justify="start" className='btn-position'>
                    <Col>
                        <Custombtn title="Save & Continue" bgcolor={'#013347'} textColor={'white'} />
                    </Col>
                    <Col>
                        <Custombtn title="Skip for now" textColor={'#013347'} border={'1px solid #013347'} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


export default Content;
