import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import "../index.css";
import Encyclopedie from "./Encyclopedie";
import { useMyContext } from "./MyContext";
import Shop from "./Shop";
import Auteur from "./Auteur";
function Home() {
  const { activeIndex } = useMyContext();

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />
        <article className="bg-slate-700 basis-10/12 flex items-center justify-center overflow-auto z-0">
          {activeIndex === 0 && <News />}
          {activeIndex === 1 && <Encyclopedie />}
          {activeIndex === 2 && <Shop/>}
          {activeIndex === 3 && <Auteur/>}
        </article>
        <Footer />
      </div>
    </>
  );
}

export default Home;
