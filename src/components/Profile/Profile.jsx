import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props){
    // console.log(props)


    // let postsData = [
    //     {id: 1, title: "IT Kamasutra", like: 5},
    //     {id: 2, title: "Let's learn react", like: 20},
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={ props.state.postsData } newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>

    )
}

export default Profile;