export default function Home(){
    return (
        <>
        <div className="">
                <div className="flex flex-col gap-[4em]">
                    <div className="card lg:card-side bg-[#3c0052] shadow-xl size-1/2 ml-14">
                        <figure>
                            <img src="/image/-pirate-.png" alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Project My_RPG</h2>
                            <p>This project involved creating a video game with RPG elements using the C programming language and the CSFML graphical libraries.<br></br> It included developing a game engine, implementing features such as combat, social interactions, animations, and creating graphical assets like the map.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_4').showModal()} open modal>See more</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Pirate Quest</h3>
                                        <p className="py-4">The game that we created is named Pirate Quest, through fight, </p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="card lg:card-side bg-[#3c0052] shadow-xl size-1/2 mr-14">
                            <figure>
                                <img src="/image/mini_shell.png" alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Project Minishell</h2>
                                <p>The aim of this project was to recreate an entire shell inspired by TCSH, with command, binaries, and built-in, in C</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}open modal>See more</button>
                                    <dialog id="my_modal_5" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-[#3c0052] shadow-xl size-1/2 ml-14">
                        <figure>
                            <img src="/image/étagère.webp" alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Project Organized</h2>
                            <p>For this project, we were tasked with creating a sorting system in C.<br></br>
                            The main objective of the project was to understand<br></br>how sorting algorithms work.<br></br>
                            We implemented several sorting options.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_6').showModal()}open modal>See more</button>
                                <dialog id="my_modal_6" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="card lg:card-side bg-[#3c0052] shadow-xl size-1/2 mr-14">
                            <figure>
                                <img src="/image/corewar_.png" alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Project Corewar</h2>
                                <p>On this project we had to recreate the well known "Corewar" that is a virtual fighting arena where some programs try to be last one standing.<br></br>Where we worked with C an assembly language to create translate and execute the instructions of each 'champions' in the arena</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_7').showModal()}open modal>See more</button>
                                    <dialog id="my_modal_7" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}