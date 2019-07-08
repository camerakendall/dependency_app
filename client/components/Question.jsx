import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Gradient = keyframes`
0%, 100% {
    background-position: 0% 50%
}
50% {
    background-position: 100% 50%
}
`

const QuestionWrapper = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
height: 300px;
width: 600px;
background-size: 400% 400%;
background: linear-gradient(45deg, darkblue, blue, teal, turquoise);
animation: ${Gradient} 10s linear infinite;
`
const Quest = styled.h1`
text-align: center;
font-size: 40px;
padding: 10px;
color: whitesmoke;
font-family:helvetica;
font-weight: 300;
`
const Options = styled.div`
display: flex;
justify-content: center;
`
const Option = styled.div`
width: 150px;
display: inline block;
text-align: center;
`
const Label = styled.label`
display: block;
color: rgba(0,0,0,0.8);
font-family:helvetica;
font-size: 30px;
`

const Question = ({
    index,
    question

}) => (
        <QuestionWrapper idx={index}>
        
            <Quest>{question}</Quest>
            <Options>
                <Option>
                    <Label htmlFor="Yes">Yes</Label>
                    <input type='radio' name='radio' id='Yes'/>
                </Option>
                <Option>
                    <Label htmlFor="No">No</Label>
                    <input type='radio' name='radio' id='No'/>
                </Option>
            </Options>
        </QuestionWrapper>
    )

export default Question;