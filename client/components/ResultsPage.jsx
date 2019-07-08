import React from "react";
import '../styles/ResultsPage.css'
class ResultsPage extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <main className="results-page">
        Your Results:
        <section className="command-container">
          <h2>Your install command</h2>
          <h4>Run this command in your terminal from your application's root directory.</h4>
          <div className="code-container">
            <p className="install">npm install react redux express body-parser mongodb pg pg-admin webpack css-loader</p>
          </div>
        </section>
         
        <section  className="resource-container">
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

export default ResultsPage;