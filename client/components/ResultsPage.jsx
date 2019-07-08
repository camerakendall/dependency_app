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
    let installLine = "npm install ";
    let allDocs = [];
    let allNotes = [];
    if (this.props.codeToDisplay && this.props.codeToDisplay.length > 0) {
      console.log(this.props.codeToDisplay)
      const allInfo = this.props.codeToDisplay;
      // console.log(allInfo, Array.isArray(allInfo))
      // allInfo.forEach(function (elem) {
      //   console.log(elem)
      // })
      console.log("allInfo", allInfo)
      allInfo.forEach(elem => {
        console.log("testing", elem)
        let deps = elem.dependencies;
        let docs = elem.docs;
        let notes = elem.notes;
        console.log(deps, docs, notes)
        if (deps) {
          deps.forEach(dep => {
            installLine += `${dep} `;
          })
        }
        if (docs) {
          console.log("yes there are docs")
          docs.forEach(doc => {
            allDocs.push(<li>{doc}</li>);
          })
        }
        if (notes) {
          notes.forEach(note => {
            allNotes.push(<li>{note}</li>);
          })
        }
      })

      console.log(installLine)
      console.log(allDocs)
      console.log(allNotes)
    }

    return (
      <main className="results-page">
        Your Results:
        <section className="command-container">
          <h2>Your install command</h2>
          <h4>Run <code>npm init</code>, then run this command in your terminal from your application's root directory.</h4>
          <div className="code-container">
            <p className="install">{installLine}</p>
          </div>
        </section>

        <section className="resource-container">
          <div className="allStuff">
            <h2 className="docs-heading">Docs</h2>
            {
              allDocs.length > 0 &&
              <ul>
                {allDocs}
              </ul>
            }
          </div>

          <div className="allStuff">
            <h2 className="notes-heading">Notes</h2>
            {
              allNotes.length > 0 &&
              <ul>
                {allNotes}
              </ul>
            }
          </div>
        </section>
      </main>
    )
  }
}

export default connect(mapStateToProps)(ResultsPage);