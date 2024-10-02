import React from 'react';
import { Link } from 'react-router-dom';    
export default function Home() {
    return (
        <div className="bg-white mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl  text-cyan-700 " >
                            IIIT KOTA
                            <span className="hidden sm:block text-4xl text-cyan-700">code base</span>
                        </h2>

                     
                    </div>

                </div>

                <div className="absolute inset-0 w-full   h-[120%] sm:my-20 sm:pt-3 pt-12 h-full ">
                    <img className="w-128 h-[100%]" src="https://img.freepik.com/premium-photo/programmers-working-code-software-development_1222783-21207.jpg?w=1060" alt="image1" />
                </div>
      

            </aside>

            <div className="grid  place-items-center sm:mt-20">
                {/* <img className="sm:w-100 w-120 w-[80%]" src="https://media1.tenor.com/m/kxZgL7zPf0EAAAAC/hello-world-seytonic.gif" alt="image2" /> */}
                <h2>Welcome to HackTheChain 3.0, the biggest hackathon in Kota City, presented by the Indian Institute of Information Technology Kota (IIIT Kota) in association with Codebase IIIT Kota. This hybrid event will be held on Devfolio with a prize pool of ₹1,50,000.

The hackathon unfolds in two thrilling rounds - Round 1 (Code Submission) is scheduled from February 12th to 20th, 2025, offering participants the opportunity to dive into project code submissions, engage in quizzes, and partake in various fun activities. The excitement peaks in Round 2 (Final Project Showcase) on February 23rd, 2025, where participants present their revolutionary ideas to a panel of judges, eagerly awaiting the announcement of results on the same day.

It serves as a dynamic platform for students nationwide to converge, exhibit their talents, and glean insights from industry experts within a competitive and collaborative framework. Our aim is to nurture innovation, creativity, and problem-solving skills while fostering a culture of collaboration and community development.

Our hackathon is unique in that it offers participants two different tracks to choose from: the Blockchain Track and the Open-to-All Track. In the Blockchain Track, participants will have the opportunity to build decentralized applications and explore the full potential of blockchain technology. In the Open-to-All Track, participants are free to explore any domain of their choosing and can build web or mobile applications, data analysis tools, or anything else they can think of.

HackTheChain is more than just a hackathon; it's an opportunity to network with like-minded individuals, gain valuable experience, and win exciting prizes. We provide participants with access to cutting-edge tools and technology, mentorship from industry experts, and a supportive community to help bring their ideas to life.

Join us for an unforgettable weekend of coding, learning, and fun. Register now and become a part of the HackTheChain 3.0 community!</h2>
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">HackTheChain3.0</h1>
            <h2  className="flex items-center">The biggest hackathon in Kota City, presented by the IIIT Kota in association with Codebase IIIT Kota. This event on Devfolio promises a monumental experience, fostering innovation and collaboration.Notably, it stands as the annual flagship Hackathon of IIIT Kota, promising an immersive experience for all participants. </h2>
            <h2  className="text-center text-2xl sm:text-5xl py-10 font-medium">Register Now !</h2>
        </div>
    );
}

