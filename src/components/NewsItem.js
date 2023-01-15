import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
   let {title , desc , imageUrl , hrefUrl ,publishedAt,author,source}=this.props;
   let d=new Date(publishedAt);

    return (
      <div >
        <div className="card-group">
        
        <div className="card">

          <div className='badge'>
        <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>

            <img src={!imageUrl?"https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/786864/0508-HiringGuides-NodeJS_Dan_Social-cb33f70c56b0eb4df466056462ea3932.png":imageUrl} className="card-img-top" alt="NewsImage"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                
                

                <p className="card-text">{desc}</p>
                <a href={hrefUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                <div className="card-footer">
                    <p ><small className="text-muted">By: {!author?"Unknown":author}</small>
                    <br/>
                      <small className="text-muted">{d.toGMTString()}</small>
                    </p>
                    
                </div>
            </div>
        </div>
      
      </div>
    )
  }
}


export default NewsItem

