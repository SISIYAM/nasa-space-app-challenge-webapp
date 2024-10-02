import React from "react";

function ContactForm() {
  return (
    <form className="w-full max-w-md mt-8 p-4 border border-gray-300 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-center">Contact Us</h2>

      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          id="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          id="email"
          type="email"
          placeholder="Your email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
          id="message"
          placeholder="Your message"
          rows={4}
          required
        />
      </div>

      <div className="text-center">
        <button
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
