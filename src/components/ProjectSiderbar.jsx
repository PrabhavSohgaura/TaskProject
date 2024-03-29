import React from "react";

const ProjectSiderbar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 md: w-72 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md: text-xl text-stone-20">
        Your Project
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md: text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-500 hover:text-stone-200">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSiderbar;
