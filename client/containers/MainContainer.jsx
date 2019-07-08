// container that holds all the components

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import QuestionsDisplay from '../components/QuestionsDisplay.jsx';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const Main = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
margin-top: -15px;
`
const Buttons = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`
const NextButton = styled.button`
padding: 10px;
width:  15em;
border-radius: 6px;
border: 1px solid midnightblue;
`

const mapStateToProps = (applicationState) => ({
    questions: applicationState.questions,
    answers: applicationState.answers
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const MainContainer = (props) => (
    <div className="container">
        <div id='questionsDisplay'>
            <h1>{props.questions}</h1>
            <QuestionsDisplay />
            <button id='button' onClick={() => { props.nextButton() }}>Next</button>
        </div>
        {/* could create a new component here at Submit that would handle the fetch call in vanilla react
        would need to fetch from the '/result' endpoint and pass in our answers array either as params or request body
            whew! */}
        <button>Submit</button>
    </div>
);
//need the submit button at the bottom of container - render conditionally
// if index is at the last question, render submit button instead

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);