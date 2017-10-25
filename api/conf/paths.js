'use strict'

require('dotenv').config

const path = process.env.BASE_PATH

module.exports = {

    extern: {

        getMessage : (text) => {
            return `http://localhost:4003/api/DialogFlow/message/${text}`
        },

        FilmykService: {
            messagesPost: () => 'http://localhost:4001/api/reply'
        },
    },

    intern: {
        message: `/api/message/{id}`,
        postMessage: `/api/message`,
        getMessages: `/api/messages`
    }
}