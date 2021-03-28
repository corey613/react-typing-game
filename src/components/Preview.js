import React from 'react';

const Preview = (props) => {

    const text = props.text.split('');
 

    return (
        <div>
           {
            text.map((s,i) => {
                let color;
                if (i < props.userInput.length){
                    color = s === props.userInput[i] ? 'green' : 'red';
                }
                return <span key={i} style={{backgroundColor: color}}>{s}</span>
            })   
           }
        </div>
    )
}

export default Preview;