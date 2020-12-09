import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.filterAll}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.props.filterActive}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.props.filterDone}
        >
          Done
        </button>
      </div>
    );
  }
}
