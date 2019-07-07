import React from 'react';

const Question = ({
    index,
    question

}) => (
        <div idx={index}>
            {question}
            <label>
                <input type='radio' name='yes' value='Yes'/>
            Yes</label>
            <label>
                <input type='radio' name='no' value='No'/>
            No</label>
        </div>
    )

export default Question;