import { asyncHandler } from "../utils/asyncHandler.js"
import { Contact } from "../models/contact.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerContact = asyncHandler( async (req, res) => {
    const {email, phoneNumber} = req.body

    const contact = await Contact.create({
        email: email || "",
        phoneNumber: phoneNumber || "",
        linkedId: null,
        linkPrecedence: "primary"
    })
    
    const createdContact = await Contact.findById(contact._id).select("-createdAt -updatedAt -__v")

    if(!createdContact){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    res.status(200).json(
        new ApiResponse(createdContact)
    )
})


export {registerContact}