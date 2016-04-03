import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.id = 0;

    this.state = {
      id: this.id,
      text: '',
      done: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
  }

  onAddClick() {
    this.id++;
    this.props.add(this.state);
    this.setState({ id: this.id, text: '' });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            value={this.state.text}
            onChange={this.onInputChange}
            type="text"
            className="form-control"
          />
          <span className="input-group-btn">
            <button
              onClick={this.onAddClick}
              className="btn btn-success"
              type="button"
            >
              Add
            </button>
          </span>
        </div>
      </div>
    );
  }
}
