const contextProcessor= async (chatId)=>{
    if(!chatId){
        throw new Error('ChatId is required');
    }
    const  messages =[];
    const sumary =[];
    const tasks=[];
    return {
        messages,
        summary,
        tasks

    };


}