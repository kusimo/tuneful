import React from 'react';
import './components/style/Aside.css'
import logoimage from './logo.png';
import Logo from './components/Logo';
import Nav from './components/Nav';
import ListItem from './components/ListItem';
import Watermark from './components/Watermark';
import Link from './components/router/Link';


class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: '' }
    }

    onClick = (text) => {
        this.setState({ active: text })
    }

    render() {
        return (
            <aside className="menu">
                <Logo image={logoimage} />
                <Nav title="Explore" part="nav">
                    <ul className="nav__list">
                        <Link href="/" className="item">
                            <ListItem onClick={this.onClick} selected={this.state.active} icon="disc" text="Discover" part="nav" />
                        </Link>
                        <Link href="/search" className="item">
                            <ListItem onClick={this.onClick} selected={this.state.active} icon="search" text="Search" part="nav" />
                        </Link>
                        <Link href="/favourites" className="item">
                            <ListItem onClick={this.onClick} selected={this.state.active} icon="heart" text="Your Tunes" part="nav" />
                        </Link>
                    </ul>
                </Nav>

                <Nav title="Services" part="nav">
                    <ul className="nav__list">
                        <Link href="/premium" className="item">
                            <ListItem onClick={this.onClick} selected={this.state.active} icon="circle" text="Premium" part="nav" />
                        </Link>
                        <Link href="/settings" className="item">
                            <ListItem onClick={this.onClick} selected={this.state.active} icon="cog" text="Settings" part="nav" />
                        </Link>
                    </ul>
                </Nav>

                <div className="watermark">
                    <Watermark title="Github" link="https://github.com/kusimo/tuneful" icon="git" />
                </div>

            </aside>
        )
    }
}

export default Aside;