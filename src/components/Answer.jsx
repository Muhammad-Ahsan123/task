import React from 'react';
import '../App.css'
function Answer({ answer, spacefull }) {
    // const paragraphStyle = {  };
    return (
        <p className={'answerPTag'}>
            {answer}
        </p>
    );
}

export default Answer;
