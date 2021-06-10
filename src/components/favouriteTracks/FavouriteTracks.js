import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FavouriteTracks extends Component{

    constructor(props){
        super(props);

        this.state = {
            token : props.token,
            timeRange : "long_term",
            topTen : [],

            filterOpen : false
        }
        
        this.timeRangeChange = this.timeRangeChange.bind(this);
    }

    componentDidMount(){

        var _token = localStorage.getItem("token");
        if(_token){

            this.setState({
                token : _token
            }, function(){
                this.refreshList();
            });

        } else{
            this.logout();
        }

    }

    refreshList(){
        var time_range = this.state.timeRange;
        if(this.state.token){            
            fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${time_range}`, {
                headers : {
                    'Authorization' : 'Bearer '+ this.state.token
                }
            })
              .then(res => res.json())
              .then(
                // success
                (result) =>{

                    console.log(2, result);

                    if(!result.error){
                        this.setState({
                            topTen : result.items
                        });
                    }

                    if(result.error){
                        this.logout();
                    }

                },
                // error
                (err) =>{
                  alert("Error");
                }
              )
        }
    }

    logout(){
        window.location.href = "/logout";
    }

    timeRangeChange(e){
        var val = e.target.value;

        this.setState({
            timeRange : val
        }, function(){
            this.refreshList();
        });
    }

    render(){
        return (
            <div>

                <div className="tt-page-header">
                    <div class="tt-page-h1">
                        <div className="container">
                            <h1>Your Top Tracks</h1>
                        </div>
                    </div>

                    <div className="container">
                        <h2>Below is a list of your favourite tracks.</h2>

                        <div class="row pt-3">
                            <div class="col-auto">
                                <select value={this.state.timeRange} onChange={this.timeRangeChange}>
                                    <option value="long_term">All Time</option>
                                    <option value="medium_term">6 Months</option>
                                    <option value="short_term">6 Weeks</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    { (this.state.topTen.length > 0) ? (
                        <div className="tt-track-list">
                            {this.state.topTen.map((item, i) => {
                                return (
                                    <div className="tt-track" key={i}>

                                        <div class="tt-track-image" style={{ backgroundImage : `url('${item.album.images[0].url}`}}></div>

                                        <div className="tt-track-content">
                                            <h2>{item.name}</h2>
                                            <h3>{item.artists[0].name}</h3>
                                        </div>

                                        <div>
                                            <div className="tt-track-index">
                                                {i+1}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        ) : 
                    "Loading" 
                    }

                </div>
            </div>
        )
    }
}

export default FavouriteTracks