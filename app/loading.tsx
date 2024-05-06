import Heading from "./ui/global/Heading"
import { StoryCardSkeleton } from "./ui/skeletons/Skeletons"


export default function Loading() {
    <div className="w-full flex flex-col items-center">
        <Heading text="10 Random Stories From HackerNews" />
        <div className="grid grid-cols-2 w-2/3 gap-2">
            <StoryCardSkeleton />
        </div>
    </div>
}
