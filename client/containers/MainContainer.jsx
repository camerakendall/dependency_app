// container that holds all the components

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import QuestionsDisplay from '../components/QuestionsDisplay.jsx';
import { bindActionCreators } from 'redux';


const mapStateToProps = (applicationState) => ({
    questions: applicationState.questions,
    answers: applicationState.answers

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const MainContainer = (props) => (
    <div className="container">
        <div id='questionsDisplay'>
            <h1>{props.questions}</h1>
            <h1>TEXT</h1>
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