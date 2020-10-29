import React from 'react';
import './components/style/Aside.css'
import logo from './logo.png';
import Logo from './components/Logo';
import Nav from './components/Nav';
import ListItem from './components/ListItem';
import Watermark from './components/Watermark';
import Link from './components/router/Link';


class Aside extends React.Component {
    render() {
        return (
            <aside className="menu">
                <Logo image={logo} />
                <Nav title="Explore" part="nav">
                    <ul className="nav__list">
                        <Link href="/" className="item">
                            <ListItem icon="disc" text="Discover" part="nav" />
                        </Link>
                        <Link href="/search" className="item">
                            <ListItem icon="search" text="Search" part="nav" />
                        </Link>
                        <Link href="/favourites" className="item">
                            <ListItem icon="heart" text="Your Tunes" part="nav" />
                        </Link>
                    </ul>
                </Nav>

                <Nav title="Services" part="nav">
                    <ul className="nav__list">
                        <Link href="/premium" className="item">
                            <ListItem icon="circle" text="Premium" part="nav" />
                        </Link>
                        <Link href="/settings" className="item">
                            <ListItem icon="cog" text="Settings" part="nav" />
                        </Link>
                    </ul>
                </Nav>

                <div className="watermark">
                    <Watermark title="Github" link="https://git.io" icon="git" />
                </div>

            </aside>
        )
    }
}

export default Aside;