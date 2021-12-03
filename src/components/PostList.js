import React, {Component} from 'react';
import axios from 'axios';
const Amadeus = require('amadeus');

PostList (props) {
    const amadeus = new Amadeus({
    clientId: '[API Key]',
    clientSecret: '[API Secret]'
    })

    const flight = amadeus.referenceData.urls.checkinLinks.get({ airline: 'IB' })

    render() {
        return (
            <div>
                <h1>List of Posts</h1>
                <p>{flight}</p>
            </div>
        )
    }
}

export default PostList