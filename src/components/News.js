import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import No_img from '../no_img.jpg';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
    page:1
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      // page:this.state.page+1,  
      totalResults: parsedData.totalResults,
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const cacheKey = `${this.props.country}-${this.props.category}-page-${this.state.page}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      console.log('present in local storage');
      const parsedData = JSON.parse(cachedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
      return;
    }
  
    console.log('not present in local storage');
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
    }); 
    localStorage.setItem(cacheKey, JSON.stringify(parsedData));
  };
  
  
  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 className="text-center">Top Headlines</h1>
          <h2 className="text-center">({this.props.category})</h2>
          {this.state.loading && <Spinner />}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length < this.state.totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
          <div className='row'>
              {!this.state.loading && this.state.articles.map((e) => {
                return <div className="col mx-2" key={e.url}>
                  <NewsItem title={e.title ? e.title.slice(0, 40) : ""} desc={e.description ? e.description.slice(0, 100) : ""} imgUrl={e.urlToImage ? e.urlToImage : No_img} newsUrl={e.url} author={e.author} date={e.publishedAt} src={e.source.id} />
                </div>
              })}
          </div>
          </div>
            </InfiniteScroll>
        </div>
      </>
    )
  }
}
export default News
