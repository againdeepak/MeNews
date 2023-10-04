import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='  mx-2 my-3'>
            <div className="card text-center bg-dark text-light">
                <div className="card-header">
                    News
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special headlines for you...</h5>
                    <p className="card-text">Be update and do grow in you life with Melliote News</p>
                    <Link to="/https://github.com/againdeepak/MeNews" className="btn btn-outline-light">Visit</Link>
                </div>
                <div className="card-footer text-body-secondary">
                Copyright @ 2013-2023 Melliote News
                </div>
            </div>
        </div>
    )
}
