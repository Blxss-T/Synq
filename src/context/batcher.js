const Message= require('../models/Message');


/** 
 * @param {String} chatId
 * @param {Number} limit
 */
const batchMessages= async(chatId,limit=20){
    if(!chat){
        throw new Error ('chatId is required');
    }
    const messages= await Message.find({chat:chatId})
    .sort({createdAt: -1})
}