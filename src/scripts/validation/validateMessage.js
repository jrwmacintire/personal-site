export default function validateMessage(message) {
    // console.log(`Validating 'message' from form...`, 'message:\n', message);
    if(message.length > 0) {
        if(message.length < 300) return {valid: true, feedback: 'Message validated.'};
        else return { valid: false, feedback: 'Message is too long!' };
    } else {
        return { valid: false, feedback: `Message is too short... write somethin'!` }
    }
}