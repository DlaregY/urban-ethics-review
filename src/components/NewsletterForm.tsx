"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your.email@institution.edu"
          required
          className="flex-1 px-4 py-3 bg-cream border border-brass/30 rounded-sm font-body text-ink placeholder:text-sage/50 focus:outline-none focus:border-brass transition-colors"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-forest text-parchment font-body text-sm tracking-wide rounded-sm hover:bg-burgundy transition-colors"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-sage/60 font-body italic">
        We respect your privacy, though we respect aesthetic accountability more.
      </p>
    </form>
  );
}
