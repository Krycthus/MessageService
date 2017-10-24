'use strict'

import Paths from '../conf/paths'
import messageController from '../controllers/messageController'
import Joi from 'joi'

module.exports = (server) => {

    server.route({
        method: 'POST',
        path: Paths.intern.message,
        handler: messageController.postMessage,
        config: {
            tags: ['api'],
            validate: {
                payload: {
                    id: Joi.number().integer().required().description('ID'),
                    text: Joi.string().min(1).required().description('message')
                }
            }
        }
    })
}