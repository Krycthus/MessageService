'use strict'

require ('dotenv').config

import Paths from '../conf/paths'
import Boom from 'boom'
import Fetch from 'node-fetch'

exports.getMessage = (request, reply) => {

}

exports.postMessage = (request, reply) => {
    
    getReponseBot(request.payload.text)
    .then(json => {
        const resMassage = {
            content: json.content
        }
        postOnMessenger(resMassage)
    })


}

const getReponseBot = (text) => {
    return Fetch(Paths.extern.getMessage())
    .then(res => res.json())
    .catch(err => console.log(err))
}

const postOnMessenger = (message) => {
    return Fetch(Paths.extern.FilmykService.messagesPost(),{
        method: 'POST',
        body: JSON.stringify(message)
    })
    .catch(err => console.log(err))
}