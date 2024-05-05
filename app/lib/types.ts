export type Story = {
    id: number,
    deleted?: boolean,
    type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt',
    by: string,
    time: number,
    text?: string,
    dead?: boolean,
    parent?: number,
    poll?: number,
    kids?: number[],
    url: string
    score: number,
    title: string,
    parts?: number[],
    descendants?: number,
}

export type StoryWithUserScore = Story & { userScore: number };

export type UserDetails = {
    created: number,
    id: string,
    karma: number,
    submitted: number[]
}