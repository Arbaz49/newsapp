import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  }
  capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("hello this is constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title= `${this.capitalize(this.props.category)}-NewsyFy`;
  }

  async updateNews(PageNo) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8c7f2af83454315a1dd93d72e1f214f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await fetch(url);
    this.props.setProgress(30);
    this.setState({
      loading: true,
    })
    const parsedData = await data.json()
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false

    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevclick = async () => {
    this.setState({page:this.state.page-1});
    this.updateNews();
  }

  handleNextclick = async () => {
  this.setState({page:this.state.page+1});
  this.updateNews();
  }

  render() {
    return (
      <div className="container my-4">
        <h1 className='text-center'style={{marginTop:"90px"}}>NewsyFy-Top  {this.capitalize(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {

            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="conatinet d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevclick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextclick}> Next &rarr;</button>
        </div>
      </div>
    )

  }
}

export default News
