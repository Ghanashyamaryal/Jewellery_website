import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <h2 className=" text-5xl m-12 mb-10 font-bold  text-orange-700 text-center">Contact Us</h2>
            <section className="container mx-auto p-8 rounded-lg flex justify-center items-center" style={{ backgroundColor:"#2f3e63", minHeight: '80vh',}}>
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-50 border-0 border-b-2 border-white rounded-none py-2 px-3 focus:outline-none focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-50 border-0 border-b-2 border-white rounded-none py-2 px-3 focus:outline-none focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white">Message:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-50 border-0 border-b-2 border-white rounded-none py-2 px-3 focus:outline-none focus:border-blue-300"></textarea>
                        </div>
                        <button type="submit" className="bg-white hover:bg-opacity-75 text-indigo-600 font-bold py-2 px-4 rounded" onClick={()=>alert("Your Contact submitted")}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
