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
        {
            /* //add heading or Label
            // render some divs here
            // any components that we want to display */}
        <h1>{props.questions}</h1>
        <h1>TEXT</h1>
        <QuestionsDisplay />
        <button id='button' onClick={() => {props.nextButton()}}>Next</button>
        {/* we need submit button here, perhaps in div */}
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);