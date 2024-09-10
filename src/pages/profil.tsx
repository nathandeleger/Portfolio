import Link from "next/link";

export default function Home(){
    return (<>
    <div className="bg-space bg-fixed">
        <div className="mb-6 flex justify-center">
            <h1 className="p-4 text-white bg-[#3c0052] text-center text-xl rounded-xl max-w-screen-sm">My greetings, Im Nathan and you ? </h1>
        </div>
        <div className = "flex justify-center">
        <label className="swap swap-flip text-9xl">
            <input type="checkbox"/>
                <div className="swap-off">
                    <img className="shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out cursor-pointer" src="image/cv_pic.png"></img>
                </div>
                <div className="flex-col swap-on flex items-center justify-center bg-[#3c0052] shadow-2xl rounded-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="240"
                        viewBox="0 0 24 24"
                        fill = "orange">
                    <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/>
                    </svg>
                        <a className="btn btn-accent transition-transform transform hover:scale-105 duration-200 ease-in-out cursor-pointer" href="/doc/cv_nathan_deleger.pdf" download target="_blank">Download</a>
                </div>
            </label>
        </div>
        <p> <br></br></p>
        <p> <br></br></p>
        <p> <br></br></p>
    </div>
        </>)
}