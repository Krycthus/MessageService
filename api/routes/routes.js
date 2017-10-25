'use strict'

import Paths from '../conf/paths'
import messageController from '../controllers/messageController'
import Joi from 'joi'

module.exports = (server) => {

    server.route({
        method: 'GET',
        path: Paths.intern.message,
        config: {
            tags: ['api'],
            validate: {
                params: {
                    id: Joi.number().integer().required().description('id')
                }
            },
            handler: messageController.getMessage
        }
    })

    server.route({
        method: 'POST',
        path: Paths.intern.postMessage,
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