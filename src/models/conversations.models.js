const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const db = require('../utils/database')

const Conversations = db.define('conversations',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
    },
    image_url: {
        type: DataTypes.STRING
    },
    userId : {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
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

module.exports = Conversations