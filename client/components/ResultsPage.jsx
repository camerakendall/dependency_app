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
      const allInfo = this.props.codeToDisplay;
      allInfo.forEach(elem => {
        let deps = elem.dependencies;
        let docs = elem.docs;
        let notes = elem.notes;
        if (deps) {
          deps.forEach(dep => {
            installLine += `${dep} `;
          })
        }
        if (docs) {
          docs.forEach(doc => {
            allDocs.push(<li><a href={doc} >{doc}</a></li>);
          })
        }
        if (notes) {
          notes.forEach(note => {
            allNotes.push(<li>{note}</li>);
          })
        }
      })
    }

    return (
      <main className="results-page">
        
        <section className="command-container">
          <h2>Your install command</h2>
          <h4>Run npm init, then run this command in your terminal from your application's root directory.</h4>
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