import { RiDeleteBin6Line } from "react-icons/ri";

const Notes = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      {/* <div className="sm:w-[80%] mx-auto lg:w-[85%]"> */}
      <div className="h-[180px] w-[80%] mx-auto shadow-lg shadow-gray-400 border-2 my-10 relative sm:w-[45%] lg:w-[27%] xl:w-[26%]">
        <h1 className="px-2 my-3 mx-3">{props.title}</h1>
        <p className="px-2 my-3 mx-3 h-[110px]">{props.content}</p>
        <button onClick={deleteNote}>
          <RiDeleteBin6Line className="h-[36px] w-[36px] cursor-pointer absolute right-5 bottom-5 text-[#FBBC04] rounded-[50%]" />
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default Notes;
