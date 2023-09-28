import React, { Component } from 'react'
export class Newsitems extends Component {
  
  render() {
    let { title, desc ,imgUrl,url,author,time,source} = this.props;
    return (
      <div>
        <div className="card">
        <span class="badge btn-danger p-2">{source}</span>
          <img className="card-img-top" src={imgUrl?imgUrl:"https://images.macrumors.com/t/9038993-PAP0TbY1xSI39nRbY6M=/2500x/article-new/2023/03/iPhone-15-Pro-Volume-Rocker-and-Titanium-Thumb.jpg"} alt="Card  cap"/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-primary">{desc}</p>
              <p className="card-text">By {author?author:"Unknown"} on {(new Date(time)).toUTCString()}</p>
              <a href={url}  target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>

    )
  }
}
export default Newsitems