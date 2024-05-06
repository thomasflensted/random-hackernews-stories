import DOMPurify from "isomorphic-dompurify";

const Bio = ({ rawBio }: { rawBio: string }) => {

    const cleanBio = DOMPurify.sanitize(rawBio);

    return (
        <div className="w-full">
            <h3 className="text-xs text-gray-600 font-medium">Bio:</h3>
            <p className="text-xs text-gray-600 mt-2 leading-5 line-clamp-6" dangerouslySetInnerHTML={{ __html: cleanBio }}></p>
        </div>
    )
}
export default Bio