import React from 'react'

const Carousel = () => {
    return (
        <>
            <div className='container-fluid'>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="" alt="Los Angeles" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="chicago.jpg" alt="Chicago" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="ny.jpg" alt="New York" className="d-block w-100" />
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            </div>
        </>
    )
}



export default Carousel;