const Header = () => {
    return (
        <div className="navbar bg-base-100 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/" >Portfolio</a>
            </div>
            <li><a className=" p-4 btn btn-ghost link" href="/projet">Project</a></li>
            <li><a className=" p-4 btn btn-ghost link" href="/profil">Profil</a></li>
            <li><a className=" p-4 btn btn-ghost link" href="/contact">Contact</a></li>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Header;