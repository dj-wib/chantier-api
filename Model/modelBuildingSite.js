const mongoose = require("mongoose");

const buildingSiteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    adress: {

        number: {
            type: Number,
            },

        street: {
            type: String,
        },

        zip_code: {
            type: Number,
        },

        town: {
            type: String,
        }
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Building_site", buildingSiteSchema);