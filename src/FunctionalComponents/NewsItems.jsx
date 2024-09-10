import React, { Component } from "react";

class NewsItems extends Component {
  render() {
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card hover-overlay hover-zoom hover-shadow ripple">
            <img
              src={this.props.pic}
              height={200}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ height: "80px" }}>
                {this.props.title.slice(0, 100)}
              </h5>
              <hr />
              <p className="card-text" style={{ height: "200px" }}>
                {this.props.description && this.props.description.slice(0, 300)}
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                href={this.props.url}
                className="btn btn-dark w-100 btn-sm"
              >
                Read Full Article{" "}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NewsItems;
