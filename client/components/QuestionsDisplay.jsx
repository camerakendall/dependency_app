//This is our Question Component
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Question from './Question.jsx';
import styled from 'styled-components';

const Main = styled.div`
height: fit-content;
width: fit-content;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
padding-bottom: 10px;
`

const mapStateToProps = ({ applicationState }) => ({
    questions: applicationState.questions,
    answers: applicationState.answers,
    index: applicationState.index

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

<<<<<<< HEAD

const QuestionsDisplay = props => (
    <div className="questionField">
        <h2> Display Questions </h2>
=======
const QuestionsDisplay = props => (
    <Main className="questionField">
>>>>>>> 12156834ab604bd2b6f11b607a304c77d8a086f2
        {
            props.index < props.questions.length &&
            <Question
                question={props.questions[props.index]}
                key={props.index}
                index={props.index}
            />
        }
    </Main>
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDisplay);


