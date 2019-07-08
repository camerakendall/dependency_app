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
    if (this.props.codeToDisplay) {
      console.log(this.props.codeToDisplay)
      const allInfo = this.props.codeToDisplay;
      // console.log(allInfo, Array.isArray(allInfo))
      // allInfo.forEach(function (elem) {
      //   console.log(elem)
      // })
      const installLine = "npm install ";
      const docs = [];
      const notes = [];
      console.log(allInfo)
      allInfo.forEach(elem => {
        elem.dependencies.forEach(dep => {
          installLine += dep;
        })
        elem.docs.forEach(doc => {
          docs.push(doc);
        })
        elem.notes.forEach(note => {
          notes.push(note);
        })
      })

      console.log(installLine)
      console.log(docs)
      console.log(notes)
    }

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