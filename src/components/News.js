import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
    
    static defaultprop ={

        country:'in',
        category:'general',
    }

    static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
    }
    constructor(){
        super();
        this.state = {
            articles :[],
            loading : false,
            page:1,
        }
    }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5de4b041c844f049f2f5f55388a58d8&page=1&pagesize=6` ;
        this.props.setProgress(40);
        let data = await fetch(url);
        this.props.setProgress(70);
        let finalData = await data.json();
        this.setState({articles:finalData.articles, totalResults: finalData.totalResults});
        this.props.setProgress(100);
    }

    handleprev= async ()=>{
        this.fetchData(this.state.page - 1);
    }

    handlenext= async ()=>{

        if (this.state.page + 1 > Math.ceil(this.state.totalResults/6)){
        }
        else{
            this.fetchData(this.state.page + 1);
        }

    }

    async fetchData(pageNo){
        this.props.setProgress(10);
            let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5de4b041c844f049f2f5f55388a58d8&page=${pageNo}&pagesize=6`;
            this.setState({loading:true});
            let data= await fetch (url);
            this.props.setProgress(50);
            let parsedData = await data.json()
            this.props.setProgress(70);
            this.setState({
                page: pageNo,
                articles: parsedData.articles,
                loading:false
            })
            this.props.setProgress(100);
    }

    render() {
        return(
                <div className="container my-3">
                    {this.state.loading && <Spinner/>}
                    <div style={{marginTop:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{backgroundColor:"#E4003A",borderRadius:"5px",padding:"10px",width:"600px"}}><h1 className="text-center" style={{color:'black'}}>News-Monkey Daily-News</h1></div></div>
                    
                    
                    <br></br>
                    <div className="row">
                        {this.state.articles.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url}>
                            {!this.state.loading &&<NewsItem title={element.title} discription={element.description} imageurl={!element.urlToImage?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2160563450.jpg?c=16x9&q=w_800,c_fill":element.urlToImage} url ={element.url} publishedAt={element.publishedAt} source={element.source.name}/>}
                        </div>
                        })}    
                    </div>
                    <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprev}> &larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/6)} type="button" className="btn btn-dark" onClick={this.handlenext}> Next &rarr;</button>
                    </div>
                </div>
        );
    } 
}