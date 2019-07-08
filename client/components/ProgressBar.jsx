import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import '../styles/ProgressBar.css';

const mapStateToProps = ({ applicationState }) => ({
  questions: applicationState.questions,
  answers: applicationState.answers,
  index: applicationState.index

});


class ProgressBar extends React.Component{
  constructor(){
    super()
  }
  render(){
    let dynamicWidth = {
      width: ((this.props.index / 15) * 100) + '%',
    };
    return(
      <div className="progress-bar-container1">

        <div className="progress-bar-container2">
          <div className="progress-bar" style={dynamicWidth}>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(ProgressBar);
