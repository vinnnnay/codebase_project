import React from 'react';
export default function Contact() {
    return (
    

                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-cyan-100 text-cyan-1000 hover:bg-blue-600 font-bold py-3 px-6 rounded-lg mt-3 hover:bg-cyan-900 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
       
    );
}

const contact = new Contact();




