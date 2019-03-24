import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.js';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasgottenOkFromServer: false
    }

  }

  render() {
    const tools = ['hammer', 'saw','nails'];
    return (
      <div>
        <h1>Hey there from List</h1>
        <p>what's up</p>
        <p className="class-here">wahhh</p>
        {hasgottenOkFromServer && <div> WE DID GOOD!</div>}}
        <ListItem />
      </div>
    );
  }
}

export default List;
