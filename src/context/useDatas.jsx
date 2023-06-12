import { createContext , useEffect, useState } from "react";
import homeData from '../data/home-data.json'

export const DatasContext = createContext();

export function DataProvider({children}) {
    const [hDataPost , setHDataPost] = useState([]);
    const [dataLoaded , setDataLoaded] = useState(false)

    useEffect(() => {
        setHDataPost(homeData.post)
        setTimeout(() => {
            setDataLoaded(true)
        }, 4000)
    }, []); 

    const savePost = (id) => {
        const postNumber = hDataPost.findIndex(item=>item.id==id)
        const newPosts = [...hDataPost]
        newPosts[postNumber].saved = !newPosts[postNumber].saved
        setHDataPost(newPosts)
    }

    const likedPost = (id) => {
        const postNumber = hDataPost.findIndex(item=>item.id==id)
        const newPosts = [...hDataPost]
        newPosts[postNumber].like = !newPosts[postNumber].like
        setHDataPost(newPosts)
    }

    const commentsList = (id) => {
        console.log("comentar publicacion:" + id)
    }

    const vCommentsList = (id) => {
        console.log("ver comentarios publicacion:" + id)
    }

    const numberLabel = (id) => {
        console.log("los etiquetados de:" + id)
    }

    return (
        <DatasContext.Provider value={{
            hDataPost,
            dataLoaded,
            savePost,
            likedPost,
            commentsList,
            vCommentsList,
            numberLabel
        }}>
            {children}
        </DatasContext.Provider>
    )
}