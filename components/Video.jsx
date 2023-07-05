// it is a good practice to make all the React at one folder
// Here's how you can do it:
// 1-->Create a Component
// 2-->Export the components to App.js and use it

// import './Video.css'
// function Video() {
//     let topic="React-Js Tutorials"
//     return (
//         <>
//             <h1>I am video component made at components folder</h1>
//             <div className="bg" style={{color:'red'}}>{topic} is here..</div>

//         </>
//     )
// }

// export default Video;


//---------------------------Props---------------------------

// import './Video.css'
// function Video(Props) {
//     // Props comes is form of object thats why we used props.title
//     //console.log(Props)
//     return (
//         <>
//             <img src='https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600' alt='images' className='img' />

//             <div className="bg">{Props.title} is here..</div>
//         </>
//     )
// }

// export default Video;

//.............................Props by Destructuring Way.................
// import './Video.css'
// function Video({title ,bgColor}) {
//     console.log({title})

//     return (
//         <>
//             <img src='https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600' alt='images' className='img' />

//             <div className="bg" style={{backgroundColor:bgColor}}>{title} is here..</div>
//         </>
//     )
// }

// export default Video;

//........................................Building a Video Component ................
import React from 'react';
import './Video.css';

function Video({ title, Channel, view, time }) {
  return (
    <div className='main'>
      <div className='pic'>
        <img src='https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600' alt='images' className='img' />
      </div>
      <div className='title'>{title}</div>
      <div className='ChannelName'>{Channel}</div>
      <div className='views'>{view} Views <span>.</span>{time}</div>
    </div>
  );
}

export default Video;
