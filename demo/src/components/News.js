import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static defualtProps={
    country:'in',
    pageSize:3,
    category:'general'
  }
  static propsTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1

    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25de0af14ed74eb18f1768161b0057e9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults,loading:false })
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=25de0af14ed74eb18f1768161b0057e9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading:false
    })
  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25de0af14ed74eb18f1768161b0057e9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });

      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading:false
      })
    }
  }

  render() {
    // d-flex justify-content-space-around flex-wrap justify-content-between align-items-center
    return (
      <div className='container'>
        <h1 className='text-center my-2'>Melliote News - Be Update...</h1>
       { this.state.loading && <Spinner />}
        <hr />
        <div className='row my-3'>

          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <Newsitems title={element.title} desc={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <hr />
        <div className='container d-flex justify-content-between  my-3'>
          <button disabled={this.state.page <= 1} className='btn btn-dark ' onClick={this.handlePrevClick}>&laquo; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News