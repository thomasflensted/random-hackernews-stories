import { notFound } from "next/navigation";
import StoryCard from "../story/StoryCard"
import { getTopStories } from "../../lib/data";

export async function Stories() {

    const topStories = await getTopStories();
    if (!topStories) notFound();

    const sortedByScore = topStories.sort((a, b) => a.score > b.score ? 1 : -1);
    const highestScore = Math.max(...topStories.map(story => story.score));

    return (
        <>
            {sortedByScore.map(story =>
                <StoryCard
                    key={story.id}
                    story={story}
                    highestScore={highestScore} />
            )}
        </>
    )
}
