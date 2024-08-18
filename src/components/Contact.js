import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">
        {" "}
        This is my Contect us page{" "}
      </h1>
      <form className="p-2 bg-slate-600 m-2 rounded-lg">
        <input
          type="text"
          className="m-2 hover:cursor-pointer border-black"
          placeholder="enter name"
        ></input>{" "}
        <br></br>
        <input
          type="text"
          className="m-2 hover:cursor-pointer"
          placeholder="message"
        ></input>
        <button className="text-yellow-600 font-bold">Submit</button>
      </form>
    </div>
  );
}

export default Contact