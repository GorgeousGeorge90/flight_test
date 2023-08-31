import axios from 'axios';


class TicketsService {
    private baseUrl = 'https://to-do-list-app-1a04e-default-rtdb.firebaseio.com/'

    async getAllTickets()  {
        return await fetch(this.baseUrl)
    }
}

export const API = {
    getAll: async ()=> {
        return await fetch('https://to-do-list-app-1a04e-default-rtdb.firebaseio.com/')
    }
}


export default new TicketsService()