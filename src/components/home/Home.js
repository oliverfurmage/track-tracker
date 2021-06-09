import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div>
                <div className="tt-page-header">
                    <div class="tt-page-h1">
                        <div className="container">
                            <h1>Track Tracker</h1>
                        </div>
                    </div>

                    <div className="container">
                        <h2>Welcome</h2>
                    </div>
                </div>

                <div className="container">

                    <div className="tt-square-link-list">
                        <h2>Check out your favourites</h2>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/favourite-tracks" className="tt-square-link">
                                    <div className="tt-square-link-image"></div>
                                    <h3>Favourite Songs</h3>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to="/favourite-tracks" className="tt-square-link">
                                    <div className="tt-square-link-image"></div>
                                    <h3>Favourite Artists</h3>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tt-square-link-list">
                        <h2>Play some games</h2>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/favourite-tracks" className="tt-square-link">
                                    <div className="tt-square-link-image"></div>
                                    <h3>Guess the song</h3>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            

        )
    }
}

export default Home