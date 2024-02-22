import React from "react";
import Lala from "/lala.jfif";
function Bestaire() {
  return (
    <>
      {" "}
      <section>
        <h2 className="text-left underline text-3xl">Bestiaire</h2>
        <div className="flex flex-col my-4 justify-between">
        <div className="flex flex-row my-4">
            {" "}
            <img src={Lala} alt="Lala" className="w-24 h-24 self-center" />
            <p className="whitespace-normal mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              animi soluta eius adipisci ab deserunt qui maiores, recusandae non
              consequuntur quo dolores itaque vitae vero id nemo ratione
              praesentium incidunt!Lorem Lorem i{" "}
            </p>
          </div>
          <div className="flex flex-row my-4">
            {" "}
            <p className="whitespace-normal mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              animi soluta eius adipisci ab deserunt qui maiores, recusandae non
              consequuntur quo dolores itaque vitae vero id nemo ratione
              praesentium incidunt!Lorem Lorem i{" "}
            </p>
            <img src={Lala} alt="Lala" className="w-24 h-24 self-center" />
          
          </div>
       
          <div className="flex flex-row my-4">
            {" "}
            <img src={Lala} alt="Lala" className="w-24 h-24 self-center" />
            <p className="whitespace-normal mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              animi soluta eius adipisci ab deserunt qui maiores, recusandae non
              consequuntur quo dolores itaque vitae vero id nemo ratione
              praesentium incidunt!Lorem Lorem i{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bestaire;
