// container that holds all the components

import react from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Questions from '../components/Questions';

const mapStateToProps = ({
    // to be added with data
})

const mapDispatchToProps = dispatch => ({
    // depends on what we are going to dispatch to the reducers
})

const MainContainer = (props) => {
    <div className="container">
        {
         /* //add heading or Label
        // render some divs here
        // any components that we want to display */}
        <Questions />
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);