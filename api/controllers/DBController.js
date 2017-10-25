'use-strict'
import Db from '../conf/db'

module.exports = {
    getMessages: (idUser) => {
        return Db.query('SELECT * FROM message WHERE idUser = $1 ORDER BY creationdate ASC', [idUser])
    },
    getMessage: (id) => {
        return Db.query('SELECT * FROM message WHERE id = $1', [id])
    },
    deleteMessage: (id) => {
        return Db.query('DELETE FROM message WHERE id = $1', [id])
    },
    createMessage: (message) => {
        return Db.query('insert into message(text, iduser, creationdate) values($1, $2, $3) RETURNING *', [message.content, message.iduser, message.creationdate])
    }
}