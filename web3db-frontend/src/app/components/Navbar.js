import Link from 'next/link';
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="nav-bar">
            <div class="content">
            <div class="title"> Web3DB Frontend Demo </div>
            <div class="log-reg">
                <Link href="/my-profile">
                    <div class="my-profile"> My Profile </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar;