import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    phoneNumber: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: false
      },
      linkedId: {
        type: Schema.Types.ObjectId,
        ref: 'Contact',
        required: false
      },
      linkPrecedence: {
        type: String,
        enum: ['primary', 'secondary'],
        required: false
      }
},{ timestamps: true})

export const Contact = mongoose.model('Contact',contactSchema)