const batchMessages = require("../context/batcher");
const summarizeMessages = require("../context/summarizer");

const contextProcessor= async (chatId)=>{
    if(!chatId){
        throw new Error('ChatId is required');
    }
    const  messages =await batchMessages(chatId);
    const sumary =;
    const tasks=[];
    return {
        messages,
        summary,
        tasks

    };


};
module.exports=contextProcessor;