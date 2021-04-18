function RenderThree(){
    console.log('hello')
}


let state = 
{

    profilePage : {
        postsData :[
            {id: 1, title: "IT Kamasutra", like: 5},
            {id: 2, title: "Let's learn react", like: 20},
        ],
        newPostText: 'Khachatur Hovsepyan'
    },
    messagesPage: {
        dialogData : [
            {id: 1, name: 'Dima' },
            {id: 2, name: 'Lena' },
            {id: 3, name: 'Dasha' },
            {id: 4, name: 'Vera' }
            
        ],
        messagesData : [
            {id: 1, message: 'hi' },
            {id: 2, message: 'how are you ?' },
            {id: 3, message: 'Great' },
        ]
    },
    navbarFriends: {
        friendsData: [
            {id: 1 , name: 'Peter' },
            {id: 2 , name: 'Angela' },
            {id: 3 , name: 'Vera' }
        ]
    }
    
}

export let addPost = () => {
    let newPost = {
        id: 3, title: state.profilePage.newPostText, like: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    RenderThree()
}
export let updateNewPostText = (newText) => {
    
    state.profilePage.newPostText = newText
    RenderThree()
}


export const subscribe = (observer) => {
    RenderThree = observer
}

export default state