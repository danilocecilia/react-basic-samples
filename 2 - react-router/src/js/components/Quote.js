import React from "react";

export default class Quote extends React.Component {
  render() {
    const { title, description } = this.props;

    const divStyle = {
      maxWidth: '300px',
      margin: '10px'
    }

    return (
      <div class="d-inline-flex card border-secondary mb-3" style={divStyle}>
        <div class="card-header">{title}</div>
        <div class="card-body">
          <p class="card-text">{description}</p>
        </div>
      </div>
    );
  }
}