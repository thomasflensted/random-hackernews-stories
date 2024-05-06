import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="w-full font-semibold text-blue-700 px-6 py-3 border-b justify-center flex">
            <Link href='/'>Random Hacker News Stories</Link>
        </nav>
    )
}

export default NavBar