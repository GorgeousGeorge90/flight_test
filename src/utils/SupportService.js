

class SupportService {

    dateTransform(date) {
        const data = new Date(date)
        return `${data.getHours()}:${data.getMinutes()} ${data.getDate()}.${data.getMonth()}`
    }

    durationStyle(duration) {
        const hours = Math.floor(duration/60)
        const minutes = duration - hours * 60
        return `${hours} ч ${minutes} мин`
    }
}

export default new SupportService()