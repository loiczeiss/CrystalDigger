import React from "react";
import { reveal as Menu } from "react-burger-menu";
import { useMyContext } from "./MyContext";
function Header() {
  let styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "40px",
      top: "60px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "flex",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const {
    activeIndex,
    setActiveIndex,
    listStyle,
    setListStyle,
    setEncyclopedieIndex,
  } = useMyContext();

  return (
    <>
      <header className="basis-1/12 flex flex-row bg-slate-600 z-30">
        <div
          className="basis-1/4 flex items-center justify-center"
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          <h3>
            <p>Accueil</p>
          </h3>
        </div>
        <div
          className="basis-1/4 flex items-center justify-center"
          onClick={() => setActiveIndex(1)}
          onMouseEnter={() => {
            setListStyle(2);
          }}
          onMouseLeave={() => {
            setListStyle(0);
          }}
        >
          <h3>
            <p>Encyclopédie</p>
          </h3>
          <div
            style={{ display: listStyle === 2 ? "block" : "none" }}
            className="bg-blue-200 basis-2/12 w-1/4 self-end text-center  flex flex-col justify-center absolute top-14 z-40 "
          >
            <ul className="flex flex-col">
              <li
                className="hover:bg-gray-600 py-4"
                onClick={() => {
                  setActiveIndex(1);
                  setEncyclopedieIndex(0);
                }}
              >
                Personnages
              </li>

              <li className="hover:bg-gray-600 py-4"
                onClick={() => {
                  setActiveIndex(1);
                  setEncyclopedieIndex(1);
                }}>Bestiaire</li>

              <li className="hover:bg-gray-600 py-4"
                onClick={() => {
                  setActiveIndex(1);
                  setEncyclopedieIndex(2);
                }}>Univers</li>

              <li className="hover:bg-gray-600 py-4"
                onClick={() => {
                  setActiveIndex(1);
                  setEncyclopedieIndex(3);
                }}>Carte d'Estoriah</li>
            </ul>
          </div>
        </div>
        <div
          className="basis-1/4 flex items-center justify-center"
          onClick={() => setActiveIndex(2)}
        >
          <h3>
            <p>Shop</p>
          </h3>
        </div>
        <div
          className="basis-1/4 flex flex-col items-center justify-center"
          onClick={() => setActiveIndex(3)}
          onMouseEnter={() => {
            setListStyle(1);
          }}
          onMouseLeave={() => {
            setListStyle(0);
          }}
        >
          <h3>
            <p>L'auteur</p>{" "}
          </h3>
          <div
            style={{ display: listStyle === 1 ? "block" : "none" }}
            className="bg-blue-200 basis-2/12 w-1/4 self-end text-center  flex flex-col justify-center absolute top-14 z-40 "
          >
            <ul className="flex flex-col">
              <li className="hover:bg-gray-600 py-4">Biographie</li>

              <li className="hover:bg-gray-600 py-4">Discographie</li>
            </ul>
          </div>
        </div>
      </header>

      {/* <header className="basis-2/12 flex flex-row bg-slate-500">
    <div className="basis-1/2 flex  ">
      {" "}
      <Menu styles={styles}>
        <a href="">Accueil</a>
        <ul className="mx-12">
          <li>News</li>
        </ul>
        <a href="">Encyclopédie</a>
        <ul className="mx-12 flex flex-col">
          <li>Personnages</li>
          <li>Bestaire</li>
          <li>Univers</li>
          <li>Carte</li>
        </ul>
        <a href="">Shop</a>
        <ul className="mx-12 flex flex-col">
          <li>Format papier</li>
          <li>Goodies</li>
        </ul>
        <a href="">L'auteur</a>
        <ul className="mx-12 flex flex-col">
          <li>Bibliographie</li>
          <li>Discographie</li>
        </ul>
      </Menu>
    </div>
    <div className="basis-1/2 flex items-center	 justify-center">
      <p>Recherchez</p>
    </div>
  </header> */}
    </>
  );
}

export default Header;
