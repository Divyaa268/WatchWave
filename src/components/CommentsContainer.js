import React from 'react'
// import Comments from './Comments'
// import { commentsData } from './Comments'
// import { commentsData } from '../utils/constants';


const commentsData = [
    {
        name: "Akshay Saini",
        text: "Amazing Video!😍",
        replies: [

        ]
    },
    {
        name: "Divya",
        text: "What a videeoooo🍿",
        replies: [
            {
                name: "Tanya Styles",
                text: "When can we expect another video?😎",
                replies: [
        
                ]
            },
            {
                name: "Soham Mukherjee",
                text: "Please don't spread negativity with such videos😡",
                replies: [
                    {
                        name: "Siddharth",
                        text: "True that!😵‍💫",
                        replies: [
                            {
                                name: "Seema Srivastava",
                                text: "You need to change your perspective🤓🧐",
                                replies: [
                                    {
                                        name: "Ajai Kumar",
                                        text: "I agree with you, Seema🤭",
                                        replies: [
                                
                                        ]
                                    },
                        
                                ]
                            },
                
                        ]
                    },

        
                ]
            },


        ]
    },
    {
        name: "Puja Bharti",
        text: "Let's gooooooo!💃💃💃",
        replies: [

        ]
    },

]

const Comments = ( {data} ) => {
    
    const { name, text, replies } = data;

  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
      <img 
      className='h-12 w-12'
      alt="User image"
      src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <div className='px-3'>
        <p className='font-bold'> {name} </p>
        <p> {text} </p>
      </div>

    </div>
  )
}




// to map over the list of all comments
const CommentsList = ( {comments} ) => {
    return comments.map((comment, index) => 
    <div key={index}> 
    <Comments data={comment} />

        <div className='pl-5 border border-l-gray-300 ml-5'>
            {/* FOR REPLIES which is also a list of comments so recursive*/}
            <CommentsList comments={comment.replies} />
        </div>

    </div>
    );

}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>
           Comments
           </h1>
           {/* <Comments data={commentsData[0]}/> */}
           <CommentsList comments={commentsData} />

      </div>
  )
}

export default CommentsContainer;
