/**
 * @param {Arrays} messages
 * @returns {Array} tasks
 */
const detectTasks= (messages)=>{
    if(!messages||messages.length === 0){
        return [];
    }
    const taskKeywords=[
        'need to',
        'should',
        'must',
        'i will',
        "i'll",
        'we will',
        'let’s',
        'lets',
        'todo',
        'remember to',
        'don’t forget',
        "don't forget"
    ];
    const tasks=[];
    messages.array.forEach(msg => {
         const content= msg.content.toLowerCase();
         const isTask=taskKeywords.some(keyword=>
            content.includes(keyword)
         )
       
        
    });


}