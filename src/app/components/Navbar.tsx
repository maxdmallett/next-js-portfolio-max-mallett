import Link from "next/link"

const Navbar = () => {

    const navigation = [
        "Home",
        "Experience",
        "Projects",
        "Contact",
    ];

    return (
        <div className="w-full px-10">
            <nav className="relative flex flex-wrap items-center justify-end py-8 mx-auto">

                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((menu, index) => (
                            <li className="mr-3 nav__item" key={index}>
                                <Link href="/" 
                                    className="inline-block px-4 py-2 text-md font-normal text-slate-400  hover:text-white focus:text-white uppercase"
                                >
                                    {menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                    <Link href="/" className="px-6 py-1.5 text-teal-300 bg-transparent border border-teal-300 rounded-md md:ml-5">
                        CV
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar