const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const Conversations = require('./conversations.models')
const db = require('../utils/database')

const Participants = db.define('participants',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId : {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    conversation_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Conversations,
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATEONLY,
    },
    updated_at: {
        type: DataTypes.DATEONLY,
    }
})

module.exports = Participants