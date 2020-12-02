import Post from "./Post";

const PostList = (props) =>{
    return (
        <div style={{padding: 100}}>
            {
                props.posts.map((post) =>
                        <Post
                            userName={post.userName}
                            imageUrl={post.imageUrl}
                            imageDescription={post.imageDescription}
                        />
                    )
            }
        </div>
    )
}

export default PostList;