
// This Is my Context and how we can create it..

import { createContext } from 'react';

const UserContext = createContext({
    loggedInUser : "Aman",
})

export default UserContext