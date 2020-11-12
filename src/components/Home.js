import React, { Component } from 'react';

class Home extends Component {
  state = {
    count: 0
  }
  // Frequently used
  // render()
  // componentDidMount()
  // componentDidUpdate()
  // componentWillUnmount()
  
  // Rare ones
  // shouldComponentUpdate()
  // static getDerivedStatesFromProps()
  // getSnapShotBeforeUpdate()

  componentDidMount() {
    console.log('componentDidMount()');
    // this.setState({
    //   count: 1,
    // })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    console.log('componentDidUpdate()');
  }

  //  Should the component update ?
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()', nextState)
    return nextState.count > this.state.count;
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStatesFromProps()');
    return {
      count: state.count - 1,
    }; // No change is state
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate()');
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleMinus = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    console.log('render()')
    return (
      <div> 
        <h1> This is Home Page </h1>
        <h1> {this.state.count} </h1>
        <h1> <button onClick={()=> this.handleAdd()}>Add</button> </h1>
        <h1> <button onClick={()=> this.handleMinus()}>Minus</button> </h1>
      </div>
    );
  }
}

export default Home;