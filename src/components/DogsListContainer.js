import React, { Component } from 'react'
import { connect } from "react-redux"
import DogsList from './DogsList'
import { getDogsList } from '../actions/DogsListAction'


class DogsListContainer extends Component {


    getDogsList = () => {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                console.log(response)
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
            })
            .catch(error => { console.log('ERROR!') })
    }

    componentDidMount() {
        this.props.getDogsList()
    }

    render() {
        const { dogsList } = this.props
        return (
            <div>
                <DogsList dogslist={dogsList} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { dogsList: state.DogsListReducer.dogsList }
}

export default connect(mapStateToProps, { getDogsList })(DogsListContainer);
