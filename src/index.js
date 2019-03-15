import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  testData = {
    name: "James",
    friends: "Harris",
    skill: { java: 5, css: 2 },
    goals: {
      holidays: ["japan", "canada"],
      football: "premiere"
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Table App 2</h1>
        <table className="Whole Table">
          <thead>
            <tr id="test data headers">
              {Object.keys(this.testData).map(item => (
                <td>{item}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="row 1 containing all the test data">
              {console.log(Object.keys(this.testData))}
              {/* Function below returns James and Harris from this.testData */}
              {Object.keys(this.testData).map(item =>
                typeof this.testData[item] === "string" ? (
                  <td>{this.testData[item]}</td>
                ) : null
              )}
              {/* table below is for the skill key in testData */}
              <td>
                <table className="skill table">
                  <thead>
                    <tr>
                      {Object.keys(this.testData).map(item => {
                        if (
                          typeof this.testData[item] === "object" &&
                          item === "skill"
                        ) {
                          let objData = this.testData[item];
                          let objtDataHeaderKeys = Object.keys(objData);
                          return objtDataHeaderKeys.map(item => (
                            <td>{item}</td>
                          ));
                        }
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Object.keys(this.testData).map(item => {
                        if (
                          typeof this.testData[item] === "object" &&
                          item === "skill"
                        ) {
                          let objData = this.testData[item];
                          let objtDataHeaderKeys = Object.keys(objData);
                          return objtDataHeaderKeys.map(item => (
                            <td>{objData[item]}</td>
                          ));
                        }
                      })}
                    </tr>
                  </tbody>
                </table>
              </td>

              <td>
                <table className="goals table">
                  <thead>
                    <tr>
                      {Object.keys(this.testData).map(item => {
                        if (
                          typeof this.testData[item] === "object" &&
                          item === "goals"
                        ) {
                          let objData = this.testData[item];
                          let objtDataHeaderKeys = Object.keys(objData);
                          return objtDataHeaderKeys.map(item => (
                            <td>{item}</td>
                          ));
                        }
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Object.keys(this.testData).map(item => {
                        if (
                          typeof this.testData[item] === "object" &&
                          item === "goals"
                        ) {
                          let objData = this.testData[item];
                          console.log(objData);
                          let objDataKeys = Object.keys(objData);
                          console.log(objDataKeys);
                          return objDataKeys.map(item =>
                            typeof objData[item] === "object" ? (
                              objData[item].map(item => <tr>{item}</tr>)
                            ) : (
                              <td>{item}</td>
                            )
                          );
                        }
                      })}
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
