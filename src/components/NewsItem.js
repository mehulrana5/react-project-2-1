import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,imgUrl,newsUrl}=this.props
    return (
      <div>
        <div className="card my-3" style={{width:"18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">
              {desc}..
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              read more..
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem