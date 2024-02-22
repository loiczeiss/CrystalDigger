import { useMyContext } from "./MyContext"

function News() {
const {setActiveIndex} = useMyContext()

  return (
    <> 
    <section className="w-8/12 h-2/3 bg-slate-50 flex flex-col">
      <button className="self-end mx-4 my-4" onClick={()=>{setActiveIndex(5)}}>x</button>
      <div className="flex flex-col text-center justify-evenly h-full">
      <div > 
        {" "}
        <h1>news</h1>
      </div>
      <div>
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident voluptate similique sequi adipisci veritatis
          perspiciatis quo autem? Dignissimos, ea. Aliquam odio quam sed
          laborum consequatur soluta obcaecati reiciendis harum ratione.
        </p>
      </div></div>
    </section>
 </>
  )
}

export default News