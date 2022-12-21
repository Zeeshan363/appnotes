import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CreateNotes = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="w-[90%] border-2 rounded-sm mx-auto h-[230px] relative my-10 shadow-lg shadow-gray-400 sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] ">
        <input
          name="title"
          value={note.title}
          onChange={InputEvent}
          type="text"
          placeholder="Enter Title Here..."
          className="text-lg px-2 w-[90%] mx-[5%] my-1 mt-3"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          id=""
          cols="30"
          rows="5"
          placeholder="Enter Your Note here..."
          className="border text-lg px-2 w-[90%] mx-[5%] my-1 resize-none"
        ></textarea>
        <button onClick={addEvent}>
          <BsFillPlusCircleFill className="text-[#FBBC04] cursor-pointer h-12 w-12 absolute right-5 bg-white rounded-[50%]" />
        </button>
      </div>
    </>
  );
};

export default CreateNotes;
