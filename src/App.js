import React, { Component } from 'react';
import './App.css';
import JobsList from './containers/JobsList/JobsList.js';
import Job from './containers/Job/Job.js';
import dummyData from './dummyData.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'Jobs',
      currentJob: null,
      jobs: dummyData.jobs,
      tools: dummyData.tools
    }
  }


  render() {
    return (
      <div className="App">
        <main>
          <h3>{this.state.currentNum}</h3>
          {this.state.currentPage === 'Jobs' &&
            <JobsList
              jobs={this.state.jobs}
            />
          }
          {this.state.currentPage === 'Job' && <Job />}
        </main>

      </div>
    );
  }
}

export default App;
