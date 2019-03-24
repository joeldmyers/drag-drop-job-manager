import React, { Component } from 'react';
import './JobsList.css';

class JobsList extends Component {

  constructor(props) {
    super(props);

    this.markJobAsComplete = this.markJobAsComplete.bind(this);
  }

  markJobAsComplete(e) {
    const jobToUpdate = e.target.id;
  }

  render() {

    return (
      <div>
        <h1>Job Page Here</h1>
        <button onClick={this.addJob}>Add New Job</button>
          {this.props.jobs.map( (job) => {
            return (
              <div className="row" key={job.name}>
                <div className="jobName">{job.name}</div>
                <div className="jobStatus">{job.isComplete === true ? 'Completed' : 'Ongoing'}</div>
                <div className="jobButtonCell"><button onClick={this.markJobAsComplete} id={job.id}>{job.isComplete=== true ? 'Mark Job Ongoing' : 'Mark Job Complete'}</button></div>
              </div>
            )
          })}
      </div>
    )
  }
}

export default JobsList;
