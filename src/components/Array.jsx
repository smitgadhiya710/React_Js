import React from "react";

function Array({ arr, children }) {
  return (
    <>
      {arr.map((item, i) => {
        return (
          <div key={i} className="flex justify-left items-center gap-1">
            {children}
            {item.text}
          </div>
        );
      })}
    </>
  );
}

export default Array;
