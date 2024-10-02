import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?t=st=1727891500~exp=1727895100~hmac=26657cab0b9be34ef4ade66088a6e2a546b11f1975161ad0be0d4308876613c9&w=900"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Welcome to codebase, where innovation meets collaboration. We are the platform that empowers developers, designers, and entrepreneurs to create real-world solutions through hackathons and competitive coding events
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At codebase, we bring together a community of talented individuals who are passionate about solving problems, building innovative technologies, and making an impact. Whether you're an aspiring coder, an experienced software engineer, or part of an organization looking to drive innovation, we provide the tools, resources, and opportunities you need to succeed.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Our goal is to create a space where ideas come to life, challenges are met with solutions, and collaboration leads to real-world impact. We focus on creating a vibrant ecosystem that fosters innovation through hackathons and competitions like the Smart India Hackathon (SIH).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}