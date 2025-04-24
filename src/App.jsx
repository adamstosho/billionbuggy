import Counter from "./Counter";
import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";
import React from "react";


export default function App() {
  return (
    <div className="flex items-center justify-center p-4 flex-col">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      
      <ProfileEditor />
      <UserList />
      <Counter />

      <footer className="mt-8 p-4 bg-gray-500 text-white w-full text-center fixed bottom-0">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
