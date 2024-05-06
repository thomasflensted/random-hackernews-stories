export const StoryCardSkeleton = () => {
    const skeletons = [];
    for (let i = 0; i < 10; i++) {
        skeletons.push(
            <div className="border py-3 px-5 flex flex-col gap-2.5 rounded-md animate-pulse">
                <div className="w-11/12 h-4 rounded-full bg-gray-100"></div>
                <div className="w-2/4 h-4 rounded-full bg-gray-100"></div>
                <div className="w-2/5 h-4 rounded-full bg-gray-100"></div>
                <div className="w-3/5 h-4 rounded-full bg-gray-100"></div>
                <div className="w-3/4 h-4 rounded-full bg-gray-100"></div>
            </div>
        )
    }
    return skeletons;
}

export const UserSkeleton = () => {
    return (
        <div className="border py-3 px-5 flex flex-col gap-2.5 w-11/12 rounded-md md:w-1/2 lg:w-1/4 animate-pulse">
            <div className="h-4 w-full bg-gray-100 rounded-full"></div>
            <div className="h-4 w-full bg-gray-100 rounded-full"></div>
            <div className="h-4 w-full bg-gray-100 rounded-full"></div>
            <div className="h-4 w-full bg-gray-100 rounded-full"></div>
        </div>
    )
}