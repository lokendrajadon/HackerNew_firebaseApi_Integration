import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const headersData = [
        {
            label: "New",
            href: "/newest",
            class: 'linkAttr'
        },
        {
            label: "Past",
            href: "/past",
            class: 'linkAttr'
        },
        {
            label: "Comments",
            href: "/comments",
            class: 'linkAttr'
        },
        {
            label: "ask",
            href: "/ask",
            class: 'linkAttr'
        },
        {
            label: "Show",
            href: "/show",
            class: 'linkAttr'
        }, {
            label: "Jobs",
            href: "/jobs",
            class: 'linkAttr'
        }, {
            label: "Submit",
            href: "/login",
            class: 'linkAttr'
        },

    ];

    const footersData = [
        {
            label: "GuideLines",
            href: "https://news.ycombinator.com/newsguidelines.html",
            class: 'linkAttr'
        },
        {
            label: "FAQ",
            href: "https://news.ycombinator.com/newsfaq.html",
            class: 'linkAttr'
        },
        {
            label: "Lists",
            href: "https://news.ycombinator.com/lists",
            class: 'linkAttr'
        },
        {
            label: "API",
            href: "https://github.com/HackerNews/API",
            class: 'linkAttr'
        },
        {
            label: "Security",
            href: "https://news.ycombinator.com/security.html",
            class: 'linkAttr'
        }, {
            label: "Legal",
            href: "https://www.ycombinator.com/legal/",
            class: 'linkAttr'
        }, {
            label: "Apply to YC",
            href: "https://www.ycombinator.com/apply/",
            class: 'linkAttr'
        },
        {
            label: "Contact",
            href: "/contact",
            class: 'linkAttr'
        }
    ];
    
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/`
    const [storyIds, setStoryIds] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [signIn, setSignIn] = useState(true)
    const getStory = async (storyId) => {
        const result = await axios
            .get(`${storyUrl + storyId}.json`);
        return result.data;
    };
    
    const signUpUser = (e) => {
        e.preventDefault()
        setSignIn(!signIn)
    }

    return (
        <AppContext.Provider value={{ headersData, footersData, setStoryIds, storyIds, getStory, signIn, setSignIn, signUpUser, isLoading, setIsLoading }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }