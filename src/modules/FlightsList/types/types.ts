

export type TicketType = {
    departureAirport:{
        uid:string,
        caption: string,
    }
    departureCity:string,
    arrivalDate:string,
    departureDate:string,
    arrivalCity:string,
    arrivalAirport:{
        uid:string,
        caption: string,
    }
    airline:string,
    operatingAirline:string,
    travelDuration:number,
    duration?:string,
}


export type FullTicketType = {
    duration:string,
    ticket:TicketType[],
}

export type FlightType = {
    id:number,
    price:number,
    carrier:string,
    tickets:FullTicketType[],
}
