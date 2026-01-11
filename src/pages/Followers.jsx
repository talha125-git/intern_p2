import React from "react";
import BackButton from "../componants/BackButton";
function Followers() {
  return (
    <div className="p-6">
     <BackButton />
      <h1 className="text-2xl font-bold mb-4">Followers</h1>


      <div className="mt-6 bg-white rounded shadow p-4">
        <p className="text-sm text-gray-500">No followers yet.</p>
      </div>
    </div>
  );
}

export default Followers;
