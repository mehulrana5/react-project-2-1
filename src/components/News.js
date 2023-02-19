import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 24
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles(page = 1) {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d44cf1ee83b4385bb796ef3cf3dc9b9&page=${page}&pageSize=${this.state.pageSize}`;
    const data = await fetch(url);
    const remainingRequests = data.headers.get('X-Requests-Remaining');
    console.log(`Remaining requests: ${remainingRequests}`);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page,
      totalResults: parsedData.totalResults,
    });
  }

  nextClick = () => {
    if (this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)) {
    }
    else {
      this.fetchArticles(this.state.page + 1);
    }
  }
  prevClick = () => {
    this.fetchArticles(this.state.page - 1);
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className='row'>
            {this.state.articles.map((e) => {
              return <div className="col mx-3" key={e.url}>
                <NewsItem title={e.title ? e.title.slice(0, 40) : ""} desc={e.description ? e.description.slice(0, 100) : ""} imgUrl={e.urlToImage} newsUrl={e.url} />
              </div>
            })}
          </div>
        </div>
        <div className="d-flex justify-content-between mx-5">
          <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.prevClick}>&larr; previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.nextClick}>next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News
