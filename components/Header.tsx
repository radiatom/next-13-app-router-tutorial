import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <span>logo</span>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">about</Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;
