import React from 'react';

export default function Home() {
    return (
        <>
        <div>
        <div className="flex justify-center items-center">
            <div className="bg-base-100 rounded-lg p-6 text-3xl inline-block font-bold">
                <p className="m-0">Welcome to my Portfolio's Website!</p>
            </div>
            </div>
            <div className="flex justify-center items-center space-x-20 mt-20">
                <label className="swap swap-flip text-9xl">
                    <input type="checkbox"/>
                    <div className="swap-off flex justify-center items-center">
                        <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-80 rounded-full ring ring-offset-2 transition-transform transform hover:scale-105 duration-200 ease-in-out cursor-pointer">
                                <img src="/image/github_pic.png" />
                            </div>
                        </div>
                    </div>
                    <div className="swap-on">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-80 rounded-full ring ring-offset-2 transition-transform transform hover:scale-105 duration-200 ease-in-out cursor-pointer">
                                <img src="/image/my_pic.png" />
                            </div>
                        </div>
                    </div>
                </label>
                    <div className="bg-base-100 rounded-lg p-6">
                        <p className="text-2xl">
                            Hello there, im Nathan a student in Computer Science
                        </p>
                        <p className="text">
                            Currently a 2nd years scolarship at Epitech Lyon,<br></br>im in research of an internship near from Lyon in web, data, video games or software.
                            <br></br>
                            <br></br>
                            I exhort you to visit the
                            <a className=" link" href="/projet"> Project </a>
                            section and the
                            <a className=" link" href="/contact"> Contact </a>
                            and
                            <a className=" link" href="/profil"> Profil </a>
                            if you are interest !
                        </p>
                    </div>
            </div>
            </div>
        </>
    );
}
