export type Story = {
    by: string,
    descendants: number,
    id: number,
    score: number,
    time: number,
    title: string,
    type: 'story',
    url: string
}

export type StoryWithUserScore = Story & { userScore: number };

export type UserDetails = {
    created: number,
    id: string,
    karma: number,
    submitted: number[],
    about?: string
}