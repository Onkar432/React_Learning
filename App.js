//Use a uppder case letter at first Ex.App not app this is rule to make react components
//components-->Components are the functions which return UI for webPage



// return (
//   <>
//     <h1>Hello Components</h1>;
//     <Video></Video>
//  </>
//  )
// this method called as a fragmant used to render multiple components in a single function
//<></> or <React.Fragment></React.Fragment> allows you to return multiple adjacent JSX elements without adding an extra node to the DOM, providing a cleaner structure for your components.

// import Video from "./components/Video";
// function App() {
//   return (
//     <>
//       <h1>Hello Components</h1>;
//       <Video></Video>
//       {/* <Video></Video>
//       <Video></Video> */}
//     </>
//   )

// };
// export default App;
//Now we can use Video component as many times as we want inside App.js file--->But We are  getting a same contents .Here comes the "Props" in a role

//---------------------------Props---------------------------

import React from 'react';
import Video from "./components/Video";
import './App.css';

function App() {
  return (
    <div className='App'> {/* Added className to the App component */}

      <Video bgColor="red" title="React-Js Tutorials" Channel="Code With Harry" view={100} time="1 hour ago" />

      <Video bgColor="yellow" title="Node-Js Tutorials" Channel="Free Code Camp" view={200} time="2 hours ago" />

      <Video bgColor="yellow" title="MongoDB Tutorials" Channel="Free Code Camp" view={200} time="2 hours ago" />

      <Video bgColor="yellow" title="Express JS Tutorials" Channel="Free Code Camp" view={200} time="2 hours ago" />


    </div>
  );
}

export default App;
