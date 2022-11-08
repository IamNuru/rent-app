const TruncateSentence = (sentence, maxLength) => {
    let sentenceGreater = maxLength > sentence?.length ? false : true;
    let ext =  sentenceGreater ? '...' : '.'
    //trim the string to the maximum length
    let trim = sentence.substr(0, maxLength)+ext;

    //re-trim if we are in the middle of a word
   // let trimmedString = trim.substr(0, Math.min(trim.length, trim.lastIndexOf(" ")));

    return trim;

}

export default TruncateSentence
