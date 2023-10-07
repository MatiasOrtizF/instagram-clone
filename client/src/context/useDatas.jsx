import { createContext , useEffect, useState } from "react";
import homeData from '../data/home-data.json'
import { Keyboard , Alert } from "react-native";
import DataJson from '../data/data.json'
import messageData from '../data/message-data.json'
import DataUser from '../data/data.json'

export const DatasContext = createContext();

export function DataProvider({children}) {
    const [hDataPost , setHDataPost] = useState([]);
    const [userData , setUserData] = useState([])
    const [dataLoaded , setDataLoaded] = useState(false)
    const [messages , setMessages] = useState([])
    const [messagesCount , setMessagesCount] = useState(0)
    const [input , setInput] = useState('');
    const [followingData , setFollowingData] = useState([])
    const [followersData , setFollowersData] = useState([])
    const [post , setPost] = useState([])
    const [usersData , setUsersData] = useState([])


    useEffect(() => {
        seenChat();
        setUserData(DataUser.userInformation)
        setUsersData(DataUser.usersInformation)
        setPost(DataUser.post)
        setFollowingData(DataUser.following)
        setFollowersData(DataUser.followers)
        setHDataPost(homeData.post)
        setMessages(messageData.messages)
        setTimeout(() => {
            setDataLoaded(true)
        }, 4000)
    }, []); 

    useEffect(() => {
        seenChat();
        setTimeout(() => {
            setDataLoaded(true)
        }, 4000)
    })

    const seenChat = () => {
        let cont = 0;
        messages.forEach(element => {
            if(element.chat[element.chat.length-1].seen==false) {
                cont++;
            }
        });
        setMessagesCount(cont)
    }

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
        const newHDataPost = [...hDataPost]
        if(input.trim()) {
            const newComment = {
                "id": 105, //el id tiene que ser unico
                "imageProfile": userData.userInformation.imageProfile,
                "userName": userData.userInformation.userName,
                "comment": input,
                "likesNumber": 0,
                "verified": userData.userInformation.verified,
                "like":false,
                "replies": [
                ]
            }
            newHDataPost[postNumber].comments = [...newHDataPost[postNumber].comments , newComment]
            setDataLoaded(newHDataPost)
            Keyboard.dismiss();
        }
    }

    const likedComment = (id,postNumber) => {
        const newHDataPost = [...hDataPost]
        const commentNumber = newHDataPost[postNumber].comments.findIndex(item=>item.id==id)
        if(newHDataPost[postNumber].comments[commentNumber].like) {
            newHDataPost[postNumber].comments[commentNumber].like = false
            newHDataPost[postNumber].comments[commentNumber].likesNumber -=1 
        } else {
            newHDataPost[postNumber].comments[commentNumber].like = true
            newHDataPost[postNumber].comments[commentNumber].likesNumber +=1 
        }
        setDataLoaded(newHDataPost)
    }

    const addReply = (input, postNumber, id) => {
        const newHDataPost = [hDataPost]
        const commentNumber = newHDataPost[postNumber][0].comments.findIndex(item=>item.id==id)
        console.log(newHDataPost[postNumber][0].comments[commentNumber].replies)
    }

    const viewReplies = (id,postNumber) => {
        const newHDataPost = [hDataPost]
        const commentNumber = newHDataPost[postNumber][0].comments.findIndex(item=>item.id==id)
        newHDataPost[postNumber][0].comments[commentNumber].repliesState = !newHDataPost[postNumber][0].comments[commentNumber].repliesState
        setDataLoaded(newHDataPost)
    }

    const chatOpen = (id) => {
        const newMessages = [...messages]
        const chatNumber = messages.findIndex(item=>item.id==id)
        if(newMessages[chatNumber].chat[newMessages[chatNumber].chat.length-1].seen == false) {
            newMessages.forEach(element => {
                if(element.chat[element.chat.length-1].seen==false) {
                    element.chat[element.chat.length-1].seen=true
                }
            });
        }
        setMessages(newMessages)
    }

    const sendMessage = (chatNumber,input) => {
        if(input.trim()) {
            const newMessages = [...messages]
            const newInput = {
                    "timestamp": "2023-06-15T10:33:00",
                    "senderI": true,
                    "content": input
            }
            newMessages[chatNumber].chat = [...newMessages[chatNumber].chat , newInput]
            setMessages(newMessages)
            setInput('')
        }
    }

    const editDataProfile = (image,userNameInput,nameInput,bioInput,linkInput) => {
        const newUserData = [...userData]
        newUserData[0].imageProfile = image
        newUserData[0].userName = userNameInput
        newUserData[0].name = nameInput
        newUserData[0].description = bioInput
        newUserData[0].link = linkInput
        setUserData(newUserData)
    }

    const unFollowUser = (userName) => {
        Alert.alert( 'unfollow user', 'Are you sure you want to unfollow this user?',[
            {
                text:'cancel'
            },
            {
                text:'yes',
                onPress: () => {
                    // setCommentsData(prevState => prevState.filter(item=>item.id!=id));
                    const newUsersData =  [...usersData]
                    const newUserData = [...userData]
                    const followingNumber = newUsersData.findIndex(item=>item.userName==userName)
                    newUsersData[followingNumber].following = false
                    newUserData[0].numberFollowing -= 1;
                    setUsersData(newUsersData)
                    setUserData(newUserData)
                }
            }
        ])
    } 

    const followUser = (userName) => {
        const newUsersData =  [...usersData]
        const newUserData = [...userData]
        const followingNumber = newUsersData.findIndex(item=>item.userName==userName)
        newUsersData[followingNumber].following = true
        newUserData[0].numberFollowing += 1;
        setUsersData(newUsersData)
        setUserData(newUserData)
    }

    return (
        <DatasContext.Provider value={{
            hDataPost,
            dataLoaded,
            messages,
            messagesCount,
            input,
            setInput,
            sendMessage,
            chatOpen,
            savePost,
            likedPost,
            commentsList,
            vCommentsList,
            numberLabel,
            addComment,
            likedComment,
            addReply,
            viewReplies,
            editDataProfile,
            userData,
            post,
            followingData,
            setFollowingData,
            followersData,
            usersData,
            unFollowUser,
            followUser
        }}>
            {children}
        </DatasContext.Provider>
    )
}