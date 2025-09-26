// Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvzrlbr"); // Replace with your real Formspree ID

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F5E3] text-[#4B352A]">
        <p className="text-2xl font-semibold">✅ Thank you for your message!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#F9F5E3] text-[#4B352A] flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-6 text-[#4B352A]">Contact Me</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
      >
        {/* Name */}
        <label className="block mb-4 text-sm font-semibold text-[#4B352A]">
          <span>Name</span>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md bg-[#ddebd1] border border-[#4B352A] text-[#4B352A] focus:ring-[#CA7842] focus:border-[#CA7842] p-2"
            placeholder="Your name"
          />
        </label>

        {/* Email */}
        <label className="block mb-4 text-sm font-semibold text-[#4B352A]">
          <span>Email</span>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md bg-[#d7e7ca] border border-[#4B352A] text-[#4B352A] focus:ring-[#CA7842] focus:border-[#CA7842] p-2"
            placeholder="your.email@example.com"
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message */}
        <label className="block mb-4 text-sm font-semibold text-[#4B352A]">
          <span>Message</span>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 block w-full rounded-md bg-[#dbe9d0] border border-[#4B352A] text-[#4B352A] focus:ring-[#CA7842] focus:border-[#CA7842] p-2"
            rows="4"
            placeholder="Write your message here"
          />
        </label>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 px-4 bg-[#4F1C51] text-white font-semibold rounded-md hover:brightness-110 transition"
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
