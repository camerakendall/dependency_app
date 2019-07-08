// container that holds all the components

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import QuestionsDisplay from '../components/QuestionsDisplay.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import Footer from '../components/Footer.jsx';
import ResultsPage from '../components/ResultsPage.jsx';
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
`
const NextButton = styled.button`
padding-top: 10px;
margin-top:20px;
border: 1px solid midnightblue;
margin-left:65%;
width:90px;
color: rgba(0,0,0,0.8);
height:40px;
border: rgba(0,0,0,0.8) solid 2px;
background-color: rgba(0,0,0,0);
cursor:pointer;
padding-bottom:10px;
outline: none;
`

const mapStateToProps = ({ applicationState }) => ({
    questions: applicationState.questions,
    answers: applicationState.answers,
    index: applicationState.index
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const MainContainer = (props) => (
    <React.Fragment>
        <Main className="container">
            <QuestionsDisplay />
            <Buttons>
               {props.index < props.questions.length - 1 ? <NextButton id={'button'} onClick={() => {props.nextButton()}}>Next</NextButton> : <div></div>}
            {/* we need submit button here, perhaps in div */}
            </Buttons>
        </Main>
        <ProgressBar />
        <Footer />
    </React.Fragment>
);
//need the submit button at the bottom of container - render conditionally
// if index is at the last question, render submit button instead

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);