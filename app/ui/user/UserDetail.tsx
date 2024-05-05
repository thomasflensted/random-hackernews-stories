const UserDetail = ({ title, info }: { title: string, info: string }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="text-xs text-gray-600 font-medium flex-shrink-0 mr-4">{title}</p>
            <hr className="flex-grow" />
            <p className="text-xs text-gray-600 font-medium flex-shrink-0 ml-4">{info}</p>
        </div>
    )
}
export default UserDetail