const verb = ['skedaddling', 'loving', 'bamboozling', 'Jumping', 'Impersonating'];
const object = ['starbucks', 'dog', 'lamp', 'phone', 'hot dog'];
const subject = ['Zach', 'JR', 'Sid', 'Nate', 'Chuck'];

const funnySentence = () => {
    let pickedVerb = verb[Math.floor(Math.random()*verb.length)];
    let pickedObject = object[Math.floor(Math.random()*object.length)];
    let pickedSubject = subject[Math.floor(Math.random()*subject.length)];

    return `\n${pickedSubject} was ${pickedVerb} a ${pickedObject}.\n`;
};

console.log(funnySentence());