

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
    id?:number,
    index?:number,
}

export type FullTicketType = {
    duration:string,
    ticket:TicketType,
}

export type FullTicketTypeEx = {
    duration:string,
    ticket:TicketType[],
}

export type FlightType = {
    id:number,
    price:number,
    carrier:string,
    tickets:FullTicketType[],
}

export type FlightTypeEx = {
    id:number,
    price:number,
    carrier:string,
    tickets:FullTicketTypeEx[],
}

