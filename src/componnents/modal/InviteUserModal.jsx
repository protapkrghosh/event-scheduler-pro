import MyModal from "./modal";

const InviteUserModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* my modal is the reusable modal which received isOpen and setIsOpen as a props and handle open modal */}
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {/*  modal body which is show the content of modal body its show as a children of the modal */}
        <h1 className="text-2xl text-[#0069ff]">
          Invite teammates to your lets schedule organization
        </h1>
        <div className="w-full flex items-center justify-center gap-4 my-8">
          <input
            type="text"
            placeholder="Enter recipient  email here "
            className="input input-bordered  w-[70%]"
          />{" "}
          <button className="btn-primary w-[30%]">send invite </button>
        </div>
      </MyModal>
    </div>
  );
};

export default InviteUserModal;
