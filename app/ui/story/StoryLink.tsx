const StoryLink = ({ url, title }: { url: string, title: string }) => {
    return (
        <a
            href={url}
            target="_blank"
            className="flex-grow underline font-medium text-sm overflow-hidden whitespace-nowrap text-ellipsis text-blue-700">
            {title}
        </a>
    )
}
export default StoryLink