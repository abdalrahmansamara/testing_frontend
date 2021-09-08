import React from 'react'
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
// import { flexbox } from '@material-ui/system';
// import {Box, Container} from '@material-ui/core';
import './topheader.scss'
function TopHeader() {
    return (
        <div className='topHeader'>
            <div className='left'>
                <Link className='first_nav' to='/Blog'>Blog</Link>
                <Link className='first_nav' to='/Portfolio'>Portfolio</Link>
                <Link className='first_nav' to='/Shop'>Shop</Link>
                <Link className='first_nav' to='/bbPress'>bbPress</Link>
                <Link className='first_nav' to='/BuddyPress'>BuddyPress</Link>
            </div>
            <div className='right'>
            <a href="https://web.facebook.com/" target="_blank"rel="noreferrer">
            <FacebookIcon style={{fill: "whitesmoke"}} />
            </a>
            <a  href="https://www.youtube.com/" target="_blank"rel="noreferrer">
            <YouTubeIcon style={{fill: "whitesmoke"}} />
            </a>
            <a  href="https://twitter.com/" target="_blank"rel="noreferrer">
            <TwitterIcon style={{fill: "whitesmoke"}} />
            </a>
            <a href="https://www.google.com/" target="_blank"rel="noreferrer">
            <SearchIcon style={{fill: "whitesmoke"}} />
            </a>
            </div>
        </div>
    )
}

export default TopHeader
