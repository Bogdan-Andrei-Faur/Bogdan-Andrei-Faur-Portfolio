import { motion as m } from "framer-motion";
import {
  IconAddressBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useCallback, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !message.trim()) return;
      const subject = encodeURIComponent(`Contacto portfolio - ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:bogdan.andrei.faur@gmail.com?subject=${subject}&body=${body}`;
    },
    [name, email, message]
  );
  return (
    <section className="relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 items-center justify-center">
        <m.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 justify-center text-white">
            <IconAddressBook size={28} color="#fff" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contacto
            </h2>
          </div>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            ¿Hablamos? Estoy abierto a oportunidades y colaboraciones.
          </p>
        </m.header>

        <m.div
          className="flex items-center justify-center gap-3 flex-row"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <m.a
            href="mailto:bogdan.andrei.faur@gmail.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white text-black transition shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconMail size={18} /> Email
          </m.a>
          <m.a
            href="https://www.linkedin.com/in/bogdan-andrei-faur/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white text-black transition shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconBrandLinkedin size={18} /> LinkedIn
          </m.a>
          <m.a
            href="https://github.com/Bogdan-Andrei-Faur"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white text-black transition shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconBrandGithub size={18} /> GitHub
          </m.a>
        </m.div>

        {/* Formulario */}
        <m.form
          onSubmit={sendEmail}
          className="bg-white/70 w-full max-w-xl backdrop-blur-md border border-white/90 rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <label className="block text-sm font-medium text-black/80 mb-1">
              Nombre
            </label>
            <input
              className="w-full rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-black/90 outline-none focus:ring-2 focus:ring-black/40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black/80 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-black/90 outline-none focus:ring-2 focus:ring-black/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black/80 mb-1">
              Mensaje
            </label>
            <textarea
              rows={5}
              className="w-full rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-black/90 outline-none focus:ring-2 focus:ring-black/40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <m.button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-black/85 transition shadow-sm"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconMail size={18} /> Enviar
            </m.button>
          </div>
        </m.form>
      </div>
    </section>
  );
}
