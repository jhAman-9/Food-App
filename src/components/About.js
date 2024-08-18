import React from 'react'
// import User from './User'
import UserClass from './UserClass'


// This is function base Component
// const About = () => {
//   return (
//       <div>
//       <User />
//       <UserClass name="Aman Kumar Class" location="Bihar"/>
//     </div>
//   )
// }





// This is class base components
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    // console.log("Parent components did mount About");
  }

  render() {
    console.log("About Render method");
    return (
      <div>
        <UserClass name={"1st Child"} location={"Bihar" }/>
        </div>
    );
  }
}



/*
  - parent Constructor
  - parent Render
        - child1 constructor
        - Child1 render
        
        - child2 constructor
        - child2 render

      - child1 componentsdidmount
      - child2 componentsdidmount
  - parent componentsdidmount

*/


export default About