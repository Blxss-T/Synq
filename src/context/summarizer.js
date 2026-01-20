/**
 * @param {Array} messages
 * @returns {String} sumary 
 */
const summarizeMessages=(messages)=>{
    if(!messages||messages.length==0){
        return ('no messages to summarize')
    }

     const recent = messages.slice(-3).map(msg =>`${msg.sender}: ${msg.content}`);

}