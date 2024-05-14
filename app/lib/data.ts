import { getRandomIds } from "./helpers";
import { Story, StoryWithUserScore, UserDetails } from "./types";

const baseUrl = "https://hacker-news.firebaseio.com/v0"

export async function getStoryIds(count: number): Promise<number[] | null> {

    try {
        const res = await fetch(baseUrl + "/topstories.json");
        if (!res.ok) throw Error("An error occured")
        const parsedArr = await res.json();
        return getRandomIds(parsedArr, count); // -> [1234,5678, ..., 9012,3456]
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getTopStories(): Promise<StoryWithUserScore[] | null> {
    try {
        const topStoryIds = await getStoryIds(10);
        if (!topStoryIds) throw Error("An error occured");
        const stories = await Promise.all(topStoryIds.map(id =>
            fetch(`${baseUrl}/item/${id}.json`, { cache: 'no-cache' }).then(res => res.json())))
        const storiesWithAuthorScores = await appendUserScore(stories);
        return storiesWithAuthorScores; // -> [{storydata + userscore}, ..., {storydata + userscore}]
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function appendUserScore(stories: Story[]): Promise<StoryWithUserScore[] | null> {
    try {
        const authors = await Promise.all(
            stories.map(story =>
                fetch(`${baseUrl}/user/${story.by}.json`)
                    .then(res => res.json())))
        const storiesWithUserScore = stories.map((story, idx) => {
            return { ...story, userScore: authors[idx].karma }
        })
        return storiesWithUserScore;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export async function getUserDetails(authorId: string): Promise<UserDetails | null> {

    try {
        const res = await fetch(`${baseUrl}/user/${authorId}.json`, { cache: 'no-cache' });
        if (!res.ok) throw Error("An error occured.");
        const data: UserDetails = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}