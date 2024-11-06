// import React from 'react'
// import Custombtn from './Custombtn'
// import Answer from './Answer'
// import Question from './Question'
// import Ptag from './Ptag'

// function Content() {
//     let name = 'ahsan'
//     return (
//         <>
//             <div style={{ width: '60%' }}>
//                 <Ptag title={'Question 01 / 20'} bgColor={'white'} padding={'8px 13px'} display={'inline-block'} color={'black'} borderR={'20px'} />
//                 <Question questiontitle={'What is UX UI Design?'} customStyle={'40px'} />
//                 <div style={{ display: 'flex', alignItems: 'center' , margin : '1vw 0' , color : '#2F4449' }}>
//                     <span style={{
//                         background: '#2F4449', borderRadius: '3px', width: '26px', height: '26px', marginRight: '10px'
//                     }}></span>
//                     <p>
//                         See Refrence Image
//                     </p>
//                 </div>
//                 <Answer answer='A technique to build user experience & user interface using best practices' border='true' spacefull={'nowrap'}/>
//                 <Answer answer='A technique to help developer in building design of application' />
//                 <Answer answer='A design specific thing not related to development purpose' />
//                 <Answer answer='All of above' />
//                 <Custombtn title='Save & Continue' />
//                 <Custombtn title='Skip for now' />
//             </div>
//         </>
//     )
// }

// export default Content


import React from 'react';
import { Row, Col, Radio, Space, List } from 'antd';
import Custombtn from './Custombtn';
import Answer from './Answer';
import Question from './Question';
import Ptag from './Ptag';

function Content() {

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
        <Row justify="center" style={{ width: '100%', padding: '20px' }}>
            <Col xs={24} sm={24} md={20} lg={24}>
                <Ptag
                    title={'Question 01 / 20'}
                    bgColor={'white'}
                    padding={'8px 13px'}
                    display={'inline-block'}
                    color={'black'}
                    borderR={'20px'}
                />

                <Question questiontitle={'What is UX UI Design?'} customStyle={'40px'} />

                <div style={{ display: 'flex', alignItems: 'center', margin: '1vw 0', color: '#2F4449' }}>
                    <span
                        style={{
                            background: '#2F4449',
                            borderRadius: '3px',
                            width: '26px',
                            height: '26px',
                            marginRight: '10px',
                        }}
                    />
                    <p>See Reference Image</p>
                </div>
                <List
                    dataSource={questions}
                    renderItem={(item) => (
                        <List.Item>
                            <div>
                                {/* <h3>{item.questionno}. {item.questiontitle}</h3> */}
                                <Radio.Group style={{ width: '100%' }}>
                                    <Space direction="vertical" style={{ width: '100%'  }}>
                                        {item.answers.map((answer) => (
                                            <Radio key={answer.id} value={answer.id} style={radioStyle}>
                                                {/* {answer.answer} */}
                                                <Answer answer={answer.answer}  
                                                // spacefull="normal" 
                                                />
                                            </Radio>
                                        ))}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </List.Item>
                    )}
                />
                {/* <Answer answer="A technique to build user experience & user interface using best practices" border="true" spacefull={'nowrap'} />
                <Answer answer="A technique to help developer in building design of application" />
                <Answer answer="A design specific thing not related to development purpose" />
                <Answer answer="All of above" /> */}

                <Row gutter={[16, 16]} justify="start">
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


const radioStyle = {
    display: 'flex',
    width: '100%',
    padding: '0px 20px',
    borderRadius: '8px',
    textAlign: 'left',
    marginBottom: '8px',
    border: '1px solid #e8e8e8',
    backgroundColor: '#f7f9fc',
    // justifyContent : 'center'
};

export default Content;
