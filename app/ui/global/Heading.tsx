const Heading = ({ text, margin, size }: { text: string, margin?: string, size?: string }) => {
    return (
        <div className={`${margin} flex flex-col gap-2 items-center`}>
            <h2 className={`font-medium ${size} text-blue-600`}>{text}</h2>
        </div>
    )
}
export default Heading