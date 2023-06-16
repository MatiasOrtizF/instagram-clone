import { createContext , useEffect, useState } from "react";
import homeData from '../data/home-data.json'
import { Keyboard } from "react-native";
import DataJson from '../data/data.json'
import messageData from '../data/message-data.json'

export const DatasContext = createContext();

export function DataProvider({children}) {
    const [hDataPost , setHDataPost] = useState([]);
    const [dataLoaded , setDataLoaded] = useState(false)
    const [messages , setMessages] = useState([])

    useEffect(() => {
        setHDataPost(homeData.post)
        setMessages(messageData.messages)
        setTimeout(() => {
            setDataLoaded(true)
        }, 4000)
    }, []); 

    useEffect(() => {
        setTimeout(() => {
            setDataLoaded(true)
        }, 4000)
    })

    const savePost = (id) => {
        const postNumber = hDataPost.findIndex(item=>item.id==id)
        const newPosts = [...hDataPost]
        newPosts[postNumber].saved = !newPosts[postNumber].saved
        setHDataPost(newPosts)
    }

    const likedPost = (id) => {
        const postNumber = hDataPost.findIndex(item=>item.id==id)
        const newPosts = [...hDataPost]
        if(newPosts[postNumber].like) {
            newPosts[postNumber].like = false
            newPosts[postNumber].likes -=1 
        } else {
            newPosts[postNumber].like = true
            newPosts[postNumber].likes +=1 
        }
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

    const addComment = (input,postNumber) => {
        const newHDataPost = [hDataPost]
        if(input.trim()) {
            const newComment = {
                "id": 105,
                "imageProfile": DataJson.userInformation.image,
                "userName": DataJson.userInformation.username,
                "comment": input,
                "likesNumber": 0,
                "verified": DataJson.userInformation.verified,
                "like":false,
                "replies": [
                ]
            }
            newHDataPost[postNumber][0].comments = [...newHDataPost[postNumber][0].comments , newComment]
            setDataLoaded(newHDataPost)
            Keyboard.dismiss();
        }
    }

    const likedComment = (id, postNumber) => {
        const newHDataPost = [hDataPost]
        const commentNumber = newHDataPost[postNumber][0].comments.findIndex(item=>item.id==id)
        if(newHDataPost[postNumber][0].comments[commentNumber].like) {
            newHDataPost[postNumber][0].comments[commentNumber].like = false
            newHDataPost[postNumber][0].comments[commentNumber].likesNumber -=1 
        } else {
            newHDataPost[postNumber][0].comments[commentNumber].like = true
            newHDataPost[postNumber][0].comments[commentNumber].likesNumber +=1 
        }
        setDataLoaded(newHDataPost)
    }

    const addReply = (input, postNumber, id) => {
        const newHDataPost = [hDataPost]
        const commentNumber = newHDataPost[postNumber][0].comments.findIndex(item=>item.id==id)
        console.log(newHDataPost[postNumber][0].comments[commentNumber].replies)
    }
    return (
        <DatasContext.Provider value={{
            hDataPost,
            dataLoaded,
            messages,
            savePost,
            likedPost,
            commentsList,
            vCommentsList,
            numberLabel,
            addComment,
            likedComment,
            addReply
        }}>
            {children}
        </DatasContext.Provider>
    )
}