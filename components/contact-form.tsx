"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-10 shadow-soft border border-gray-200">
      <h3 className="text-2xl font-semibold text-black">Send us a message</h3>
      <p className="mt-2 text-gray-600">Tell us what you're looking for and we'll get back to you.</p>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Your name</span>
          <input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            placeholder="e.g. Rahul Sharma"
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-black outline-none focus:border-gold transition"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Phone number</span>
          <input
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-black outline-none focus:border-gold transition"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <textarea
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
            rows={5}
            placeholder="I'm looking for a gold necklace for my wedding..."
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-black outline-none focus:border-gold transition"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-black py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
      >
        Send Message
      </button>

      {sent && (
        <p className="mt-4 text-sm text-green-700">Thanks! We'll reach out to you shortly.</p>
      )}
    </form>
  );
}
