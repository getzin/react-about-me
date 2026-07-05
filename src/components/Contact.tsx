// Contact.tsx

import ContactLink from './ContactLink';

function Contact( { contact }: any ) {
    return (
        <>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>

            {contact.map((item: any) => (
                <ContactLink
                    key={item.name}
                    name={item.name}
                    value={item.value}
                />
            ))}
        </>
    );
}

export default Contact;