import { FaRegUser, FaUserLock, FaUserSecret } from "react-icons/fa";
import useAllUsers from "../../../../hooks/useAllUsers";
import Loading from "../../../../componnents/loading/Loading";
import axios from "axios";

const AllUser = () => {
  const { allUser, refetch } = useAllUsers();
  <Loading data={allUser} />;

  const handleMakeAdmin = async (email) => {
    const res = await axios.get(
      `https://lets-sheduleit-backend.vercel.app/api/v1/users/make-admin?email=${email}`
    );
    console.log(res.data);
    refetch();
  };
  const handleBanUser = async (email) => {
    const res = await axios.get(
      `https://lets-sheduleit-backend.vercel.app/api/v1/users/make-ban?email=${email}`
    );
    console.log(res.data);
    refetch();
  };
  const handleMakeUser = async (email) => {
    const res = await axios.get(
      `https://lets-sheduleit-backend.vercel.app/api/v1/users/make-user?email=${email}`
    );
    console.log(res.data);
    refetch();
  };
  return (
    <div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-2xl text-[#0b3558] ">
                <th>#</th>
                <th>User name</th>
                <th>User email</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Make User</th>
                <th>Ban user</th>
              </tr>
            </thead>
            <tbody className="">
              {allUser?.map((user, index) => (
                <tr className="text-secondary" key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(user.email)}
                      className={"flex items-center   btn-primary"}
                    >
                      <FaUserSecret />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleMakeUser(user.email)}
                      className={"flex items-center   btn-primary"}
                    >
                      <FaRegUser />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleBanUser(user.email)}
                      className="flex items-center btn-delete"
                    >
                      <FaUserLock />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
