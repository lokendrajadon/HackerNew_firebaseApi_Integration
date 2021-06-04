
import { useEffect, useState } from 'react'
const MAX_STORIES = 500;
const STORY_INCREMENT = 50;

export const useInfiniteScroll = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(STORY_INCREMENT)

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return false;
        }
        setIsLoading(true)
    }
    useEffect(() => {
        if (!isLoading) return;
        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES)
        } else {
            setCount(count + STORY_INCREMENT)
        }
        setIsLoading(false)

    }, [isLoading])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { count }
}


