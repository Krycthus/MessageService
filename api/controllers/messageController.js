'use strict'

require ('dotenv').config

import Paths from '../conf/paths'
import Boom from 'boom'
import DBController from '../controllers/DBController'
import Fetch from 'node-fetch'

exports.getMessage = (request, reply) => {
    DBController.getMessage(request.params.id)
    .then(rows => reply(rows))
}

exports.postMessage = (request, reply) => {
    getReponseBot(request.payload.text)
    .then(json => {
        const resMessage = {
            content: json.message,
            id: request.payload.id
        }
        postOnMessenger(resMessage)
        reply(json)
    })
}

const getReponseBot = (text) => {
    return Fetch(Paths.extern.getMessage(text))
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