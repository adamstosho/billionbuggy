import { useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showDetail = selectedUser !== null;

  const filteredUsers = users.filter((user) =>
  {
    const value = searchTerm.toLowerCase()
    user.toLowerCase().includes(value)
  }
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handledelete = (index) => {
    setUsers((prevUser) => prevUser.filter((_, i) => i !== index))
  }

  const handleHover = (user) => {
    setTimeout(() => {
      console.log("Hovered over:", user);
    }, 1000);
  };

  return (
    <div className="mt-4  text-center flex flex-col gap-4 w-full bg-blue-200 justify-center items-center">
      <h2 className="text-xl font-bold">Users</h2>

      <input
        onChange={handleSearch}
        type="text"
        value={searchTerm}
        className="border p-2 mt-2"
        placeholder="Search users..."
      />
      <ul className="flex items-center gap-3 my-7">
        {(filteredUsers.length > 0 ? filteredUsers : users).map(
          (user, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedUser(user);
              }}
              onMouseEnter={() => handleHover(user)}
              className="cursor-pointer hover:bg-gray-200 p-2"
            >
              {user}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                 handledelete(index)
                }}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>

      {showDetail && (
        <div className="mt-2 p-2 bg-yellow-100">
          Selected: {selectedUser}
          <p>Name length: {selectedUser.length}</p>
        </div>
      )}
    </div>
  );
}
