// Contact.tsx

import ContactLink from './ContactLink';

function Contact( { contact }: any ) {
    return (
        <>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>
            <ContactLink
                name={contact[0].name}
                value={contact[0].value}
            />
            <ContactLink
                name={contact[1].name}
                value={contact[1].value}
            />
        </>
    );
}

export default Contact;