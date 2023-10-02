import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defualtProps = {
    country: 'in',
    pageSize: 3,
    category: 'general'
  }
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - MeNews`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25de0af14ed74eb18f1768161b0057e9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false

    })
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
  fetchMoreData= async ()=>{
    this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25de0af14ed74eb18f1768161b0057e9&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      // loading: false

    })
    
  }

  render() {
    // d-flex justify-content-space-around flex-wrap justify-content-between align-items-center
    return (
      <div style={{marginTop:"70px"}}>
        <h1 className='text-center my-3'>Melliote News - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} headlines...</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='mx-2'>
          <div className='row my-3'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <Newsitems title={element.title} desc={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        <hr />
        {/* <div className='container d-flex justify-content-between  my-3'>
          <button disabled={this.state.page <= 1} className='btn btn-dark ' onClick={this.handlePrevClick}>&laquo; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &raquo;</button>
        </div> */}
      </div>
    )
  }
}

export default News