export default function validatePhone(phone) {
    // console.log(`Validating 'phone' from form...`, 'phone:\n', phone);
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if(phoneRegex.test(phone)) return { valid: true, feedback: 'Phone number looks good!' };
    else return { valid: false, feedback: 'Something is off here...' };
}