import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount = () => this.props.fetchSmurfs();
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = () => {this.props.addSmurf(this.state)};
  handleDelete = () => this.props.deleteSmurf(this.id);


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <ul>
        {this.props.smurfs.map(smurf => 
        <li key={smurf.name}>
        <h1>Name: {smurf.name}</h1>
        <p>Age: {smurf.age}</p>
        <p>Height: {smurf.height}</p>
        </li>)}
        </ul>
        <form>
          <input placeholder="Name..." type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input placeholder="Age..." type="text" name="age" value={this.state.age} onChange={this.handleChange} />
          <input placeholder="Height..." type="text" name="height" value={this.state.height} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf
  }
}

export default connect(mapStateToProps, {fetchSmurfs, addSmurf})(App);
