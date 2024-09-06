export default function Home(){
    return (
        <>
        <div className="">
                <div className="flex flex-col gap-[4em]">
                    <div className="card lg:card-side bg-[#3c0052] shadow-xl size-1/2 ml-14">
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Project My_RPG</h2>
                            <p>This project was about creating a video game with RPG elements, with the language C and the CSFML graphical librairies</p>
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
                                <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Project Minishell</h2>
                                <p>The aim of this project was to recreate an entire TCSH copy, with command, shortcut, binaries in C</p>
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
                            <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Project Organized</h2>
                            <p>For this project we had to create an sorting system in C </p>
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
                                <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Project Corewar</h2>
                                <p>On this project we had to </p>
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