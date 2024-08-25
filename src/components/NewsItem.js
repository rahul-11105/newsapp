import react, {Component} from 'react';

export default class NewsItem extends Component {
    render() {
        let {title, discription, imageurl,url,publishedAt,source} = this.props;
        return( 
            <div className='Component'>
                <div style={{backgroundColor:'red', display:'inline-block', borderRadius:"5px", position:'relative', top:"14px",zIndex:"1", padding:"2px 10px"}}>{source}</div>
                <div className="card">
                <img src={imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{discription}...</p>
                    <p style={{color:'red', fontFamily:'serif'}}>{new Date(publishedAt).toDateString()}</p>
                    <a href={url} className="btn btn-dark">read-more</a>
                </div>
                </div>
            </div>
         );
    }
}