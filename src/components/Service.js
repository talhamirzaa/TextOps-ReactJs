import React from 'react'
export default function Service(props) {
    let mystyle={
        height:'50vh',
        border: '1px solid gray'
    }
  return (
    <>
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode==='dark'?'white':'#3e5871'}}>Our Services</h1>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/upper.png" className="d-block w-100" style={mystyle} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/lower.png" className="d-block w-100" style={mystyle} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/empty.png" className="d-block w-100" style={mystyle} alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
  </div>
      
    
    </>
  )
}
