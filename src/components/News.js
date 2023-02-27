import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner' 
import No_img from '../no_img.jpg';

export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:10,
    category:"general"
  };
  constructor(props) {
    super(props);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles(page = 1) {
    this.setState({ loading: true }); 
    
    // remove this later on cause u cant call the api 
    const cacheKey = `${this.props.country}-${this.props.category}-page-${page}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      console.log('present in local storage');
      const parsedData = JSON.parse(cachedData);
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page,
        totalResults: parsedData.totalResults,
      });
      return;
    }

    console.log('not present in local storage');
    
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d44cf1ee83b4385bb796ef3cf3dc9b9&page=${page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page,
      totalResults: parsedData.totalResults,
    });

    localStorage.setItem(cacheKey, JSON.stringify(parsedData));
  }

  nextClick = () => {
    if (!(this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({loading:true})
      this.fetchArticles(this.state.page + 1);
    }
  }
  prevClick = () => {
    this.setState({loading:true})
    this.fetchArticles(this.state.page - 1);
  }
  render() {
    return (
      <div>   
        <div className="container-fluid">
          <h1 className="text-center">Top Headlines</h1>
          <h2 className="text-center">({this.props.category})</h2>
          {this.state.loading && <Spinner/>}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((e) => {
              return <div className="col mx-5" key={e.url}>
                <NewsItem title={e.title ? e.title.slice(0, 40) : ""} desc={e.description ? e.description.slice(0, 100) : ""} imgUrl={e.urlToImage?e.urlToImage:No_img} newsUrl={e.url} />
              </div>
            })}
          </div>
        </div>
        <div className="d-flex justify-content-between mx-5">
          <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.prevClick}>&larr; previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextClick}>next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News
 