import SupportService from './SupportService';

class StateService {
    createState(data) {
        return data.flights.reduce((acc,flight,i) => {
            let item = {
                id: i,
                carrier:flight.flight.carrier.caption,
                price: flight.flight.price.total.amount,
                tickets: flight.flight.legs.reduce((acc, ticket) => {
                    let item = {
                        duration:SupportService.durationStyle(ticket.duration),
                        ticket: ticket.segments.reduce((acc, segment) => {
                            let item = {
                                departureAirport: segment.departureAirport,
                                departureCity: segment.departureCity.caption,
                                arrivalDate: SupportService.dateTransform(segment.arrivalDate),
                                departureDate: SupportService.dateTransform(segment.departureDate),
                                arrivalCity: segment.arrivalCity.caption,
                                arrivalAirport: segment.arrivalAirport,
                                airline: segment.airline.caption,
                                operatingAirline: segment.operatingAirline ? segment.operatingAirline.caption:segment.airline.caption,
                                travelDuration:segment.travelDuration,
                            }

                            acc.push(item)

                            return acc
                        }, [])
                    }

                    acc.push(item)

                    return acc
                }, [])
            }

            acc.push(item)
            return acc

        },[])
    }

    createExtraState(state) {
         const new_state = JSON.parse(JSON.stringify(state))
         return new_state.map(item => {
            return {
                ...item,
                tickets: item.tickets.reduce((acc,ticket,i) => {
                    if (ticket.ticket.length === 1) {
                        ticket.ticket = ticket.ticket[0]
                        acc.push(ticket)
                    } else {
                        ticket.ticket = {
                            id:item.id,
                            index:i,
                            departureAirport: ticket.ticket[0].departureAirport,
                            departureCity: ticket.ticket[0].departureCity,
                            departureDate: ticket.ticket[0].departureDate,
                            arrivalDate: ticket.ticket[1].arrivalDate,
                            arrivalCity: ticket.ticket[1].arrivalCity,
                            arrivalAirport: ticket.ticket[1].arrivalAirport,
                            operatingAirline: ticket.ticket[1].operatingAirline,
                        }
                        acc.push(ticket)
                    }

                    return acc
                },[])
            }
        })
    }

}

export default new StateService()