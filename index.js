const verb = ['skedaddling', 'loved', 'bamboozled', 'Jumped', 'Impersonated'];
const object = ['a starbucks', 'a dog', 'a lamp', 'a phone', 'a hot dog'];
const subject = ['Zach was', 'JR was', 'Sid was', 'Nate was', 'Chuck was'];

const funnySentence = () => {
    let pickedVerb = Math.floor(Math.random()*verb.length);
    let pickedObject = Math.floor(Math.random()*object.length);
    let pickedSubject = Math.floor(Math.random()*subject.length);

    console.log(pickedVerb);
    console.log(pickedObject);
    console.log(pickedSubject);
    return pickedVerb + pickedObject + pickedSubject;
};

console.log(funnySentence());