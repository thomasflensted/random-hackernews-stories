import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="w-full font-semibold text-blue-700 px-6 py-3 border-b">
            <Link href='/'>Home</Link>
        </nav>
    )
}
export default NavBar