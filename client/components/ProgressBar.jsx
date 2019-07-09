import React from "react";
import { connect } from 'react-redux';
import '../styles/ProgressBar.css';

const mapStateToProps = ({ applicationState }) => ({
  questions: applicationState.questions,
  answers: applicationState.answers,
  index: applicationState.index
});

class ProgressBar extends React.Component {
  constructor() {
    super()
  }
  render() {
    let dynamicWidth = {
      width: ((this.props.index / this.props.questions.length) * 100) + '%',
    };
    return (
      <div className="progress-bar-container1">
        <div className="progress-bar-container2">
          <div className="progress-bar" style={dynamicWidth}/>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(ProgressBar);
