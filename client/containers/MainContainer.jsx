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
    <Main className="container">
        <QuestionsDisplay />
        <Buttons>
            <NextButton id='button' onClick={() => {props.nextButton()}}>Next</NextButton>
        {/* we need submit button here, perhaps in div */}
        </Buttons>
    </Main>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);