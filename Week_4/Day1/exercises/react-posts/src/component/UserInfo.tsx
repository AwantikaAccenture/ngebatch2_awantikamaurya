interface userProps{
    author: {
        name: string,
        avatarUrl: string,
      },
}

const UserInfo = ({author}:userProps) => {
   console.log("Author"+author)
   return(
   
    <div className='user'>
      <img
        className='user-image'
        src={author.avatarUrl}
        alt={author.name}
      />
      <div className='user-name'>{author.name}</div>
   </div>
   )

}

export default UserInfo;