import { RiTodoLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#FBBC04]">
        <nav className="flex items-center px-5 py-3 text-white md:w-[80%] md:mx-auto">
          <RiTodoLine className="h-12 w-12 mx-3 md:h-16 md:w-16" />
          <h1 className="font-bold text-xl md:text-2xl cursor-pointer">
            Notes<b className="font-bold text-2xl md:text-3xl">App</b>
          </h1>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
