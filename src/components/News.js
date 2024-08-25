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
        let url = `https://api.thenewsapi.com/v1/news/all?api_token=RzIWcavYMF7GrXiDS3kx7cfhAPDonjvyf06z2zSI&categories=${this.props.category}&language=en` ;
        this.props.setProgress(40);
        let Data = await fetch(url);
        this.props.setProgress(70);
        let finalData = await Data.json();
        this.setState({articles:finalData.data, totalResults: finalData.totalResults});
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
            let url= `https://api.thenewsapi.com/v1/news/all?api_token=RzIWcavYMF7GrXiDS3kx7cfhAPDonjvyf06z2zSI&categories=${this.props.category}&language=en&page=${pageNo}&pagesize=6`;
            this.setState({loading:true});
            let data= await fetch (url);
            this.props.setProgress(50);
            let parsedData = await data.json()
            this.props.setProgress(70);
            this.setState({
                page: pageNo,
                articles: parsedData.data,
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
                            {!this.state.loading &&<NewsItem title={element.title} discription={element.description} imageurl={!element.image_url?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2160563450.jpg?c=16x9&q=w_800,c_fill":element.image_url} url ={element.url} publishedAt={element.published_at} source={element.source}/>}
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