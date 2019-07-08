import React from "react";
import '../styles/ResultsPage.css'
import { connect } from "react-redux";

const mapStateToProps = ({ applicationState }) => ({
  questions: applicationState.questions,
  answers: applicationState.answers,
  index: applicationState.index,
  codeToDisplay: applicationState.codeToDisplay
})

class ResultsPage extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <main className="results-page">
        Your Results:
        <section className="command-container">
          <h2>Your install command</h2>
          <h4>Run <code>npm init</code>, then run this command in your terminal from your application's root directory.</h4>
          <div className="code-container">
            <p className="install">{JSON.stringify(this.props.codeToDisplay)}</p>
          </div>
        </section>

        <section className="resource-container">
          <h2 className="notes-heading">Notes</h2>
          <div>
            <p>Resource1</p>
            <p>Resource2</p>
            <p>Resource3</p>
            <p>Resource4</p>
            <p>Resource5</p>
            <p>Resource6</p>
          </div>
        </section>
      </main>
    )
  }
}

export default connect(mapStateToProps)(ResultsPage);