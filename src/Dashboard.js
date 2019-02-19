import React, { Component } from 'react';
import './App.css';
import * as tf from '@tensorflow/tfjs';


class Dashboard extends Component {

  componentDidMount(){

    const values = [];
    for(let i = 0; i < 100;i++){
      values[i]
    }
    const shape = [10, 10]
    const a = tf.tensor2d(values, shape, 'int32')
    a.print()
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Learn that Face</h1>
      </div>
    );
  }
}

export default Dashboard;
