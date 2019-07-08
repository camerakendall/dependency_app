import React from 'react';
import Wrapper from './containers/MainContainer.jsx';
import styled from 'styled-components';

const Header = styled.h1`
text-align: center;
color: darkblue;
font-size: 50px;
`
const NPM = styled.img`
display: block;
text-align: center;
`

const App = () => {
    return(
        <div id='App'>
            <Header>Dependency Generator</Header> <br/>
            {/* <NPM height="40px" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"/> */}
            <Wrapper />
        </div>
    )
}

export default App;