import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country:'us',
        pageSize:9,
        category:'general'
    }
     
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
      }

  constructor(props){
    super();
    this.state = {
    articles:[],
    page:1,
    totalResults : 0
    };
  }

  async updateNews() {
    // this.setState({ loading: true }); // Set loading to true before fetching
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3468b6a9c314118ae192341d8834f26&page=${this.state.page}&pageSize=9`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      totalResult: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false, // Set loading to false after fetching
    });
  }
  

  async componentDidMount(){
    this.updateNews();
  } 

  fetchMoreData = async ()=>{
    this.setState({page:this.state.page+1});
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3468b6a9c314118ae192341d8834f26&page=${this.state.page}&pageSize=9`;
    const data = await fetch(apiUrl);
    const parsedData = await data.json();
    this.setState({
      totalResult: parsedData.totalResults,
      articles: this.state.articles.concat(parsedData.articles),
      loading: false, // Set loading to false after fetching
    });

  }

  prevPage =  ()=>{
      this.setState({page:this.state.page-1});
    this.updateNews();
  }
  nextPage =  ()=>{

    if (this.state.page+1 > Math.ceil(this.state.totalResult/9)) {
        // if there are no articles left to display on next page, then making next page blank
    } else {
        this.setState({page:this.state.page+1});
        this.updateNews();
        
    }

   
  }
  render() {
    return (
      <>
          <div className='container my-3'>
            <h2>Headlines</h2>
            {
                this.state.loading && <Loading/>
            }
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !=this.state.totalResults}
          loader={<Loading/>}
        >
      
        
            <div className='container'>
            <div className='row'>
              {
               !this.state.loading && this.state.articles .map((element) => {
                  return  <div className='col-md-4' key={element.url}>
                  <NewsItems title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,50):""} imgUrl ={element.urlToImage} newsUrl = {element.url}/>
                  </div>
                })
              }
                           
            </div>
            </div>
            </InfiniteScroll>
            {/*
           <div className="container d-flex justify-content-between">
            <button type="button" onClick={this.prevPage} disabled = {this.state.page<=1} className="btn btn-dark my-3">&larr;Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResult/9)} onClick={this.nextPage} className="btn btn-dark my-3">Next&rarr;</button>
            </div>
            */}


            
        </div>
      </>
      
    )
  }
}

export default News