//This is our Question Component
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Question from './Question.jsx';

const mapStateToProps = ({ applicationState }) => ({
    questions: applicationState.questions,
    answers: applicationState.answers

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const questionMaker = (question, index) => (
    <Question
        question = {question}
        key={index}
        index={index}
    />
);

// console.log(props.questions);

const QuestionsDisplay = props => (
    <div className="questionField">
        {/* <h2>{props.questions}</h2> */}
        <h2> Display Questions </h2>
        {props.questions.map((question, index) => questionMaker(question, index, props))}
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDisplay);


