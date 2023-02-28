import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, date, src } = this.props
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
            {src}
            {/* <span className="visually-hidden">unread messages</span> */}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">
              {desc}...
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">
              read more..
            </a>
            <p className="card-text"><small className="text-muted">author:{author}</small></p>
            <p className="card-text"><small className="text-muted">date:{date}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
