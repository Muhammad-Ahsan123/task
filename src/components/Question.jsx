import React from 'react';
import Ptag from './Ptag';

function Question({ questionno, questiontitle, border, customStyle, margin, padding }) {
    return (
        <div style={{ padding: padding, borderBottom: border ? '1px solid gray' : 'none', margin: margin, cursor: 'pointer' }} >
            {questionno ? (
                <Ptag
                    questionno={`Question 0${questionno}`}
                    fontsize="16px"
                    fontWeight="400"
                    margin="0"
                />
            ) : null}
            <Ptag
                id="questionHeading"
                questiontitle={questiontitle}
                fontsize={customStyle}
                color="black"
                margin="0"
            />
        </div>
    );
}

export default Question;
