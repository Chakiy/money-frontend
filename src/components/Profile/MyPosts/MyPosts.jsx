import style from './MyPosts.module.css';
import React from 'react'
import Post from './Post/Post';


function MyPosts(props) {
    // console.log(props)
    // let postsData = [
    //     {id: 1, title: "IT Kamasutra", like: 5},
    //     {id: 2, title: "Let's learn react", like: 20},
    // ]

    let postsArray = props.posts.map( post => <Post title={post.title} like={post.like}/>)
    
    let addText = React.createRef();

    let addPost = ( ) => {
     
        props.addPost()
        props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = addText.current.value
       props.updateNewPostText(text)
    }
    return (
        <div className={style.posts}>
            <h2>My Posts</h2>
            <div>
                <textarea ref={addText} value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.postBlock}>
                { postsArray}
                {/* <Post title={postsData[0].title} like={postsData[0].like}/> 
                <Post title={postsData[1].title} like={postsData[1].like}/>    */}
            </div>
            
        </div>
    )
}

export default MyPosts;
