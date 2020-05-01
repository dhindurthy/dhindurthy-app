import React from "react";
import "./accordion.scss";


class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick = e => {
    let showContent = !this.state.showContent;
    this.setState({
      showContent: showContent
    });
  };
  render() {
    return (
      <section className="accordion">
        <button
          tabIndex="0"
          onClick={this.onClick}
          className="acc-button"
          aria-expanded={this.state.showContent}
        >
          <h3>{this.props.heading}</h3>
        </button>
        {/* {this.state.showContent && ( */}
        <div
          className={
            "acc-content" + (this.state.showContent ? "show" : "hidden")
          }
        >
          {this.props.children}
        </div>
        {/* )} */}
      </section>
    );
  }
}

export default Accordion;
