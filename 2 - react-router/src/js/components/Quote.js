import React from "react";

export default class Quote extends React.Component {
  render() {
    const {title, description} = this.props;

    return (
      <div class="card border-secondary mb-3">
        <div class="card-header">{title}</div>
        <div class="card-body">
          <p class="card-text">{description}</p>
        </div>
      </div>
    );
  }
}