import Link from 'next/link';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="content">
            <div className="title"> Web3DB Frontend Demo </div>
            <div className="log-reg">
                <Link href="/my-profile">
                    <div className="my-profile"> My Profile </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar;