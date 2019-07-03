export default function validateName(name) {
    // console.log(`Validating 'name' from form...`, 'name:\n', name);
    if(name.length > 0 && name.length < 30) return { feedback: 'Name is valid!', valid: true };
    else return { feedback: 'Name input is invalid.', valid: false };
}