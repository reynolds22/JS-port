const verb = ['skedaddling', 'flimflamming', 'bamboozle', 'schmooze', 'festooned'];
const object = ['starbucks', 'dog', 'lamp', 'phone', 'hot dog'];
const subject = ['Zach', 'JR', 'Sid', 'Nate', 'Chuck'];

const funnySentence = () => {
    let pickedVerb = Math.floor(Math.random()*verb.length);
    console.log(pickedVerb);
};

funnySentence()