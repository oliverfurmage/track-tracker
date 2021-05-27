import React, { Component } from 'react';

class FavouriteTracks extends Component{

    constructor(props){
        super(props);
        this.state = {
            token : props.token,
            topTen : []
        }
    }

    componentDidMount(){
        if(this.state.token){

            fetch("https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term", {
                headers : {
                    'Authorization' : 'Bearer '+ this.state.token
                }
            })
              .then(res => res.json())
              .then(
                // success
                (result) =>{
                    console.log(result.items);
                    this.setState({
                        topTen : result.items
                    });
                },
                // error
                (err) =>{
                  alert("Error");
                }
              )
        }
    }

    render(){
        return (
            <div className="container py-5">
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
                                    </div>
                                )
                            })}
                        </div>
                    ) : "Loading" }
            </div>
        )
    }
}

export default FavouriteTracks