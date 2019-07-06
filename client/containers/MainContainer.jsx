// container that holds all the components

import react from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = ({
    // to be added with data
})

const mapDispatchToProps = dispatch => ({
    // depends on what we are going to dispatch to the reducers
})

const MainContainer = (props) => {
    // render some divs here
    // any components that we want to display
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);