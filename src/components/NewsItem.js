import React, { Component } from 'react'



export class NewsItem extends Component {


  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" >

          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'80%',zIndex:'1'}}>
            By {source}

          </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target=" " className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
