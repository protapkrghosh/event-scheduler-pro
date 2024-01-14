import MyModal from "./modal";

const InviteUserModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1 className="text-2xl text-[#0069ff]">
          Invite teammates to your letes schedule organization
        </h1>
        <div className="w-full flex items-center justify-center gap-4 my-8">
          <input
            type="text"
            placeholder="Enter recepient  email here "
            className="input input-bordered  w-[70%]"
          />{" "}
          <button className="btn-primary w-[30%]">send invite </button>
        </div>
      </MyModal>
    </div>
  );
};

export default InviteUserModal;
