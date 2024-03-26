import Link from 'next/link'


export default function NavBar() {
    return (
        <nav>
            <Link href="/forums"><img src='HomeButton.svg'/>Forums</Link>
            <Link href="/updates"><img src='UpdatesButton.svg'/>Updates</Link>
            <Link href="/guidance"><img src='GuidanceButton.svg'/>Guidance</Link>
            <Link href="/profile"><img src='ProfileButton.svg'/>Profile</Link>
        </nav>
    );
}