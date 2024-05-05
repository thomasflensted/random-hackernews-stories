export const formatDate = (rawDate: number) => {
    const raw = new Date(rawDate * 1000)
    const date = `${raw.toDateString().split(' ')[0]}, ${raw.toDateString().split(' ').slice(1).join(' ')}`
    const time = raw.toTimeString().split(' ')[0].split(':').slice(0, 2).join(':')
    return `${date} ${time}`;
}

export const formatScore = (rawScore: number) => {
    return new Intl.NumberFormat('da').format(rawScore)
}