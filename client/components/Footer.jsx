import React from "react";
import { connect } from 'react-redux';
import '../styles/Footer.css';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';



const mapStateToProps = ({ applicationState }) => ({
  questions: applicationState.questions,
  answers: applicationState.answers,
  index: applicationState.index

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

 
class Footer extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <footer className={this.props.index >= 15 ? "show-footer" : "hide-footer"}>
       <div className="button-arrow">
          <div className="submit-button" onClick={()=>{this.props.submitButton(); this.props.fetchData(JSON.stringify( ["Webpack"] ))}}>Submit</div>
          <i className="fas fa-arrow-right"></i>
        </div>
      </footer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
