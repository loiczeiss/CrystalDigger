import React from "react";
import Lala from "/lala.jfif";
function Univers() {
  return (
    <>
      {" "}
      <section>
        <h2 className="text-left underline text-3xl">Univers</h2>
        <div className="flex flex-col my-4 justify-between">
          <div className="flex flex-col my-4">
            {" "}
            <img src={Lala} alt="Lala" className="w-24 h-24 self-center" />
            <p className="whitespace-normal mx-4 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              animi soluta eius adipisci ab deserunt qui maiores, recusandae non
              consequuntur quo dolores itaque vitae vero id nemo ratione
              praesentium incidunt!Lorem Lorem i{" "}
            </p>
          </div>
          <div className="flex flex-col my-4">
            {" "}
            <img src={Lala} alt="Lala" className="w-24 h-24 self-center" />
            <p className="whitespace-normal mx-4 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              animi soluta eius adipisci ab deserunt qui maiores, recusandae non
              consequuntur quo dolores itaque vitae vero id nemo ratione
              praesentium incidunt!Lorem Lorem i{" "}
            </p>
          </div>
          <div className="flex flex-col my-4">
            {" "}
            <img src={Lala} alt="Lala" className="w-24 h-24 self-center" />
            <p className="whitespace-normal mx-4 my-4">
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

export default Univers;
