import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:10,
    category: 'general'
  }
        
        
  articles=[];
    

constructor(){
    super();
    this.state={
        page:1,
        articles:[], 
        loading:false,
        totalResults:0
    }
    
}

async updatenews(){
  this.props.setProgress(0);
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true}); 
   let data = await fetch(url);
   this.props.setProgress(50);
   let parseData=await data.json();
   this.props.setProgress(90);
   this.setState({
    
    articles:parseData.articles,
    loading:false,
    totalResults:parseData.totalResults
  })
  this.props.setProgress(100);
}

async componentDidMount(){
 this.updatenews();
}



Prepage = async()=>{
  this.setState({page:this.state.page -1})
  this.updatenews();
}

Nextpage= async ()=>{
  this.setState({page:this.state.page +1})
  this.updatenews();
}


fetchMoreData =async () => {
  this.setState({page:this.state.page + 1})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true}); 
   let data = await fetch(url);
   let parseData=await data.json();
   
   this.setState({
    articles:this.state.articles.concat(parseData.articles),
    loading:false,
    totalResults:parseData.totalResults
  })
};
  
render() {
    return (

      <div className='container my-3'>
        
        <h1 className='row justify-content-center' style={{margin:'35px 0px',marginTop:'90px'}} > NewsJs: {this.props.category==='general'?"Top Headlines": this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
        
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}>

            <div className="container">

        <div className="row">
 
        
          {this.state.articles.map((element)=>{
            return <div className="col-md-4   my-3 " key={element.url}>
            <NewsItem  title={element.title?element.title:"NO DATA"} desc={element.description?element.description.slice(0,88)+".....":"No Description"} imageUrl={element.urlToImage} hrefUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
            </div>
          })}
        </div>
        
        </div>
        </InfiniteScroll>
        
        
        {/* <div className="container d-flex justify-content-between my-3">
        <button disabled={this.state.page<=1} type="button" onClick={this.Prepage} className="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/20)} type="button" onClick={this.Nextpage} className="btn btn-dark">Next 	&rarr;</button>
        </div> */}
     

        
      </div>
    )
  }
}

export default News
