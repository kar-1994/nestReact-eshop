import React from 'react'
import { useDispatch } from 'react-redux';
import { ActionCreator } from './redux/actionCreator';

function Display(props) {
    const dipatch = useDispatch()
    let onButtonClick = (data) => {
        props.displayType({ type: data });
        if (data === 'ANALOG') {
            dipatch(ActionCreator.removeToken())
        } else {
            dipatch(ActionCreator.storeToken("qweded"))
        }
    }
    return (
        <div className='container-flex'>

            <button className='btn btn-primary' onClick={() => onButtonClick("ANALOG")} > ANALOG CLOCK</button>
            <button className='btn btn-secondary' onClick={() => onButtonClick("Digital")}> Digital CLOCK</button>

            <div className='row' style={{ "backgroundColor": "#e7c2e3", padding: "23px" }}>
                <div className="card col-sm-6" >
                    <div className="card-body">
                        <h5 className="card-title">Lotus beauty&fashion</h5>
                        <h6 className="card-subtitle mb-2 text-muted">About</h6>
                        <p className="card-text">Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.</p>
                    </div>

                </div>
                <div className="card col-sm-6">
                    <img className="card-img-top" src="https://st.depositphotos.com/1491329/3571/i/950/depositphotos_35710385-stock-photo-beauty-fashion-model-woman-with.jpg" alt="Card image cap" />

                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/corosal/image1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/corosal/image2.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>


    )
}

export default Display
