// import React from 'react';

// function Answer({ answer, border , spacefull }) {
//     console.log(spacefull);

//     const paragraphStyle = border
//         ? { border: '1.3px solid grey', borderRadius: '16px', display: 'inline-block', padding: '17px 20px', color: '#2E302F' , whiteSpace : spacefull}
//         : { padding: '15px 20px', color: '#2E302F' };
//     const spanStyle = border
//         ? { border: '6px solid gray', padding: '0px 10px', backgroundColor: '#053750', borderRadius: '50%', marginRight: '1vw'  }
//         : { border: '1px solid gray', padding: '0px 10px', backgroundColor: '#053750', borderRadius: '50%', marginRight: '1vw', marginLeft: '5px' };

//     return (
//         <>
//             <p style={paragraphStyle}>
//                 <span style={spanStyle}></span>
//                 {answer}
//             </p>
//         </>
//     );
// }

// export default Answer;




import React from 'react';

function Answer({ answer, spacefull }) {
    const paragraphStyle = { padding: '10px 0', color: '#2E302F' , display : 'inline-block' };

    // const spanStyle = {  padding: '0px 10px', backgroundColor: '#053750', borderRadius: '50%', marginRight: '1vw', marginLeft: '5px' };

    return (
        <p style={paragraphStyle}>
            {/* <span style={spanStyle}></span> */}
            {answer}
        </p>
    );
}

export default Answer;
