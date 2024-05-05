import HeadingAndSort from "./ui/home/Heading"
import { StoryCardSkeleton } from "./ui/skeletons/Skeletons"

export default function Loading() {
    <div className="w-full flex flex-col items-center">
        <HeadingAndSort text="10 Random Stories From HackerNews" showSort={false} />
        <div className="grid grid-cols-2 w-2/3 gap-2">
            <StoryCardSkeleton />
        </div>
    </div>
}
