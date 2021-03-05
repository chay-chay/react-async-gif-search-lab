import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    //state = sets initial state

    componentDidMount() {
        
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(data =>

            this.setState({gifs: data['data'].slice(0,3)})
            
        )
       
    }

    handleSearch = (event, searchTerm )=> {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data =>

            this.setState({gifs: data['data'].slice(0,3)})
            
        )

    }

    render(){
        return (
            <div>
            <GifSearch search={this.handleSearch}/>
            <GifList gifs={this.state.gifs}/>
           
            </div>
        )
    }
}

export default GifListContainer

///state is being updated