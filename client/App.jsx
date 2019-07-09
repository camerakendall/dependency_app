import React from 'react';
import Wrapper from './containers/MainContainer.jsx';
import { connect } from 'react-redux';
import ResultsPage from './components/ResultsPage.jsx';
import styled from 'styled-components';

const mapStateToProps = ({ applicationState }) => ({
  questions: applicationState.questions,
  answers: applicationState.answers,
  index: applicationState.index,
  isItTimeForResults: applicationState.isItTimeForResults
});

const Header = styled.h1`
text-align: center;
color: darkblue;
font-size: 50px;
font-family: helvetica;
fontweight:300;
`
const NPM = styled.img`
display: block;
text-align: center;
`

const App = (props) => {
    return(
        <div id='App'>
            <Header>Dependency Generator</Header> <br/>
            {/* <NPM height="40px" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"/> */}
            {props.isItTimeForResults ? <ResultsPage /> : <Wrapper />}
        </div>
    )
}

export default connect(mapStateToProps, null)(App);