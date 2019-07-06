// container that holds all the components

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Questions from '../components/Question.jsx';

// const mapStateToProps = ({
//     // to be added with data
// })

// const mapDispatchToProps = dispatch => ({
//     // depends on what we are going to dispatch to the reducers
// })

const MainContainer = (props) => {
    return(
        <div className="container">
            {
            /* //add heading or Label
            // render some divs here
            // any components that we want to display */}
            <h1>TEXT</h1>
            <Questions />
        </div>
    )
}

export default MainContainer;