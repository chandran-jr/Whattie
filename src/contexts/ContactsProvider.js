import React, {useContext} from 'react';

const ContactsContext = React.createContext()

export function ContactsProvider({children}) {
    return (
        <ContactsContext.Provider>
            {children}
        </ContactsContext.Provider>
    )
}
