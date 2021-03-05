import React from 'react'

class GifSearch extends React.Component {
    state={
        searchTerm: ""
    }

    handleChange= (e) =>{
        this.setState ({searchTerm: e.target.value }) 
    }


    render(){
        return(
            <div>
                <form onSubmit={(e) => this.props.search(e, this.state.searchTerm)} onChange={this.handleChange}>
                    <input type="Text" value={this.state.searchTerm} >

                    </input>
                </form>
            </div>
        )
    }
}

export default GifSearch


//e to prevent default. 