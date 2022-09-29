const FirstLetter = (text) =>{
    
    return Array.from(text !== '' ? text : 'Owner')[0];
}

export default FirstLetter;