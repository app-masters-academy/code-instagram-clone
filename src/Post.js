import Comment from "./Comment";

const Post = (props) => {
    console.log("post props",props);
    return (
        <div style={
            {
                maxWidth: 700,
                boxShadow: '0px 0px 4px black',
                marginBottom: 20
            }
        }>
            <b>{props.userName}</b>
            <br/>
            <img
                src={props.imageUrl}
                style={{maxWidth: '100%'}}
            />
            <p>{props.imageDescription}</p>
            <Comment/>
        </div>
    );
}

export default Post;