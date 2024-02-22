import { useState } from "react";
import Bestaire from "./Bestaire";
import Personnages from "./Personnages";
import Univers from "./Univers";
import { useMyContext } from "./MyContext";

function Encyclopedie() {
  const { encyclopedieIndex, setEncyclopedieIndex } = useMyContext();
  return (
    <>
      <article className="w-full h-5/6 bg-slate-50 flex flex-col text-center justify-evenly">
        <div className="w-full h-full bg-slate-200 px-8  overflow-auto">
          <header className=" my-8">
            <h2 className="text-left underline text-3xl">Encyclopédie</h2>
            <ol className="text-left mx-8 my-4 list-disc ">
              <li
                className="hover:text-blue-200"
                onClick={() => {
                  setEncyclopedieIndex(0);
                }}
              >
                Personnages
              </li>
              <li
                className="hover:text-blue-200"
                onClick={() => {
                  setEncyclopedieIndex(1);
                }}
              >
                Bestaire
              </li>
              <li
                className="hover:text-blue-200"
                onClick={() => {
                  setEncyclopedieIndex(2);
                }}
              >
                Univers
              </li>
              <li
                className="hover:text-blue-200"
                onClick={() => {
                  setEncyclopedieIndex(3);
                }}
              >
                Carte d'Estoriah
              </li>
            </ol>
          </header>
          {encyclopedieIndex === 0 && <Personnages />}
          {encyclopedieIndex === 1 && <Bestaire />}
          {encyclopedieIndex === 2 && <Univers />}
        </div>
      </article>
    </>
  );
}
export default Encyclopedie;
