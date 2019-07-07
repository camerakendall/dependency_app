//This is our Question Component
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Question from './Question.jsx';

const mapStateToProps = ({ applicationState }) => ({
    questions: applicationState.questions,
    answers: applicationState.answers,
    index: applicationState.index

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const QuestionsDisplay = props => (
    <div className="questionField">
        <h2> Display Questions </h2>
        {
            props.index < props.questions.length &&
            <Question
                question={props.questions[props.index]}
                key={props.index}
                index={props.index}
            />
        }
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDisplay);


