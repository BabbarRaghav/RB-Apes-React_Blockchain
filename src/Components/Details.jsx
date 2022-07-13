import React from "react";
import Navbar from "./Navbar";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center items-center pt-16 w-auto">
        <div className="name font-serif font-bold italic text-2xl">RB Apes</div>
        <div className="by flex justify-center">
          <div className="font-serif italic text-base font-thin">
            -By Raghav Babbar
          </div>
          <div className="verify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-patch-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
          </div>
        </div>
        <div className="mt-10">
          <table className="table-fixed border-separate">
            <tbody>
            <tr>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Items
              </td>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Owner
              </td>
            </tr>
            <tr>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Items
              </td>
              <td className="border border-solid border-black w-32 h-20 rounded-lg">
                10.0k Owner
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Details;
