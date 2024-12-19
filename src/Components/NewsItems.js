import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div>
        
        <div className="card" style={{width: "18rem"}}> 
  <img src={!imgUrl?"https://sportshub.cbsistatic.com/i/r/2024/12/17/0f1ae1dd-3b8d-469d-bb57-582336586e1f/thumbnail/1200x675/bc77f24f56174039c6435c55ae4a42ed/bellinger-getty-1.png":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }
}


export default NewsItems