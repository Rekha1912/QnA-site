const mongoose = require('mongoose');
const { schema } = require('./User');
const Schema  = mongoose.Schema;

const QuestSchema  = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    category: [
        {
            name: {
                type: String,
                required: true
            },
            questions: [
                {
                    user: {
                        type: Schema.Types.ObjectId,
                        ref: 'users'
                    },
                    text: {
                        type: String,
                        required: true
                    },
                    id: {
                        type: String
                    },
                    date: {
                        type: Date,
                        default: Date.now
                    },
                    answers: [
                        {
                            user: {
                                type: Schema.Types.ObjectId,
                                ref: 'users'
                            },
                            text: {
                                type: String,
                                required: true
                            },
                            id: {
                                type: String
                            },
                            date: {
                                type: Date,
                                default: Date.now
                            }
                        }
                    ]
                }
            ]            
        }
    ]
});


const Quest = mongoose.model('Quest',PostSchema);

module.exports = Quest;