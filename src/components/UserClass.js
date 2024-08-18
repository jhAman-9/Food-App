import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        id : 0,
        location: "Default",
        avatar_url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fvector-illustration-of-avatar-and-dummy-icon-set-of-avatar-and-image-stock-vector-illustration%2F244427911&psig=AOvVaw1QIf2Y7js09C2O6PlwWJ2H&ust=1715923290200000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjH5sO2kYYDFQAAAAAdAAAAABAR",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/jhAman-9");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // this.timer = setInterval(() => {
    //   console.log("SetInterval In ComponentDidMount");
    // }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component Will Mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }


  render() {

    const { name,location, avatar_url,id } = this.state.userInfo;
    return (
      <div className="p-5 border-black-4">
        <div>
          <img src={avatar_url} alt="" />
        </div>
        <div>
          <span>
            <h2>Name : {name}</h2>
            <p>Id : {id}</p>
          </span>
          <h2>Class : BCA</h2>
          <h3>Roll : 12</h3>
          <h4>Location : {location}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
  