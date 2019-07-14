
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';
import { throwStatement } from '@babel/types';

class CountryDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id));
    }

    render() {
        return(
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);