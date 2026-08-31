"use client";

import { useState } from "react";

const sessionTypes = ["Portrait", "Wedding", "Editorial", "Something else"];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  sessionType: sessionTypes[0],
  date: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to a real endpoint (e.g. Formspree, Resend, or an
    // API route) before launch. This just simulates a send for now.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("sent");
    setForm(initialForm);
  };

  if (status === "sent") {
    return (
      <div className="border border-silver/20 p-8 text-center">
        <p className="font-mono-cap text-[11px] tracking-[0.15em] text-safelight uppercase mb-4">
          Enquiry received
        </p>
        <h3 className="font-display text-2xl text-paper mb-3">
          Thank you — we&apos;ll be in touch.
        </h3>
        <p className="text-paper/60 mb-6">
          We usually reply within 1–2 business days. In a hurry? Reach us
          directly on WhatsApp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono-cap text-[11px] uppercase tracking-[0.15em] text-silver hover:text-paper transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="bg-transparent border border-silver/30 px-4 py-3 text-paper placeholder:text-silver/50 focus:outline-none focus:border-safelight transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="bg-transparent border border-silver/30 px-4 py-3 text-paper placeholder:text-silver/50 focus:outline-none focus:border-safelight transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase"
          >
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="bg-transparent border border-silver/30 px-4 py-3 text-paper placeholder:text-silver/50 focus:outline-none focus:border-safelight transition-colors"
            placeholder="+234 800 000 0000"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase"
          >
            Preferred date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="bg-transparent border border-silver/30 px-4 py-3 text-paper placeholder:text-silver/50 focus:outline-none focus:border-safelight transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="sessionType"
          className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase"
        >
          Session type
        </label>
        <select
          id="sessionType"
          name="sessionType"
          value={form.sessionType}
          onChange={handleChange}
          className="bg-transparent border border-silver/30 px-4 py-3 text-paper focus:outline-none focus:border-safelight transition-colors [color-scheme:dark]"
        >
          {sessionTypes.map((t) => (
            <option key={t} value={t} className="bg-darkroom">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase"
        >
          Tell us about the shoot
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="bg-transparent border border-silver/30 px-4 py-3 text-paper placeholder:text-silver/50 focus:outline-none focus:border-safelight transition-colors resize-none"
          placeholder="Location, number of people, vibe you're going for..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex justify-center px-8 py-3 bg-safelight text-paper border border-safelight font-mono-cap text-xs uppercase tracking-[0.15em] transition-colors hover:bg-transparent hover:text-safelight disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
