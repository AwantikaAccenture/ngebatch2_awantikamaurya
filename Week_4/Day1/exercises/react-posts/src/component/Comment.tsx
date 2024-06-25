import UserInfo from "./UserInfo";

interface commentProps {

    date: string,
    text: string,
    author: {
      name: string,
      avatarUrl: string,
    },

}


const Comment = ({date,text,author}:commentProps) => {
    console.log("Hello React",date+","+text+","+author)
    
    return(
        <div className="comment">
          <UserInfo author={author}/>
        <div className='comment-text'>{text}</div>

        <div className='comment-date'>{date}</div>

        </div>
    )
}

export default Comment;