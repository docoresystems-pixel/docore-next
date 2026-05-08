"use client";

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Inquiry Sent!");
    form.reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" className="w-full p-4 bg-slate-800" />
      <input name="email" placeholder="Your Email" className="w-full p-4 bg-slate-800" />
      <textarea name="message" placeholder="Message" className="w-full p-4 bg-slate-800" />

      <button type="submit" className="w-full py-4 bg-cyan-500 text-black font-bold">
        Send Inquiry
      </button>
    </form>
  );
}