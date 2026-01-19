const Message= require('../models/Message');


/** 
 * @param {String} chatId
 * @param {Number} limit
 */
const batchMessages= async(chatId,limit=20)