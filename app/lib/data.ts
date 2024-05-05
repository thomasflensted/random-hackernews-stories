import { Story, StoryWithUserScore, UserDetails } from "./types";

const baseUrl = "https://hacker-news.firebaseio.com/v0"

const getRandomIds = (arr: number[], storyCount: number): number[] => {

    let randomStories = [];
    const arrLength = arr.length;
    for (let i = 0; i < storyCount; i++) {
        const randomNum = Math.round(Math.random() * arrLength);
        randomStories.push(arr[randomNum]);
    }
    return randomStories;
}

export async function getStoryIds(count: number): Promise<number[] | null> {

    try {
        const res = await fetch(baseUrl + "/topstories.json");
        if (!res.ok) throw Error("Der skete en serverfejl.")
        const parsedArr = await res.json();
        return getRandomIds(parsedArr, count);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getTopStories(): Promise<StoryWithUserScore[] | null> {

    try {
        const topStoryIds = await getStoryIds(10);
        if (!topStoryIds) throw Error("Der skete en serverfejl.");
        const promises = topStoryIds.map(id =>
            fetch(`${baseUrl}/item/${id}.json`).then(res => res.json()))
        const stories = await Promise.all(promises);
        const storiesWithAuthorScores = appendAuthorScore(stories);
        return storiesWithAuthorScores;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function appendAuthorScore(stories: Story[]): Promise<StoryWithUserScore[] | null> {
    try {
        const authors = await Promise.all(
            stories.map(story =>
                fetch(`${baseUrl}/user/${story.by}.json`)
                    .then(res => res.json())))
        const storiesWithAuthorIds = stories.map((story, idx) => {
            return { ...story, userScore: authors[idx].karma }
        })
        return storiesWithAuthorIds;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export async function getUserDetails(authorId: string): Promise<UserDetails | null> {

    try {
        const authorDetails = await fetch(`${baseUrl}/user/${authorId}.json`);
        if (!authorDetails) throw Error("Der skete en serverfejl.");
        const data = await authorDetails.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getUserStories(userId: string): Promise<Story[] | null> {

    try {
        const authorDetails = await fetch(`${baseUrl}/user/${userId}.json`);
        if (!authorDetails) throw Error("Der skete en serverfejl.");
        const data: UserDetails = await authorDetails.json();
        const submissionIds = data.submitted;
        const submissions = await Promise.all(submissionIds.map(sub =>
            fetch(`${baseUrl}/item/${sub}.json`).then(res => res.json()))
        );
        const stories: Story[] = submissions.filter(sub => sub.type === 'story' && sub.dead !== true);
        return stories;
    } catch (error) {
        console.log(error);
        return null;
    }
}

