const mongoose = require('mongoose');
const { schema } = require('./User');
const Schema  = mongoose.Schema;

const QuestSchema  = new Schema({
    catname: {
        type: String,
        required: true,
        unique: true
    },
    questions: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            qtext: {
                type: String,
                required: true
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
                    atext: {
                        type: String,
                        required: true
                    },
                    date: {
                        type: Date,
                        default: Date.now
                    }
                }
            ]
        }
    ]            
});

const Quest = mongoose.model('Quest', QuestSchema);

module.exports = Quest;