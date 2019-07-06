//This is our Question Component
import react from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Question from './Question';

const mapStateToProps = ({ applicationState }) => ({
    questions: applicationState.questions,
    answers: applicationState.answers

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const questionMaker = (question, index, props) => (
    <Question
        {...question}
        key={index}
        index={index}
    // we will need to add action for our NEXT_BUTTON
    />
);

const QuestionsDisplay = props => (
    <div className="questionField">
        <h2> Display Questions </h2>
        {questions.map((question, index) => questionMaker(question, index, props))}
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDisplay);


