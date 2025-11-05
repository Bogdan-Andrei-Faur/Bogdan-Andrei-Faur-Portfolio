import { motion as m } from "framer-motion";
import {
  IconAddressBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import SectionHeader from "../../components/SectionHeader";
import { useState } from "react";

type ContactQuickLinkProps = {
  href: string;
  children: React.ReactNode;
  delay: number;
  rel?: string;
  target?: string;
};

function ContactQuickLink({
  href,
  children,
  delay,
  rel,
  target = "_blank",
}: ContactQuickLinkProps) {
  return (
    <m.a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white text-black transition shadow-sm"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </m.a>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Contacto portfolio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:bogdan.andrei.faur@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section className="relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 items-center justify-center">
        <SectionHeader
          icon={<IconAddressBook size={28} color="#fff" />}
          title="Contacto"
          subtitle="¿Hablamos? Estoy abierto a oportunidades y colaboraciones."
        />

        <m.div
          className="flex items-center justify-center gap-3 flex-row"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <ContactQuickLink
            href="mailto:bogdan.andrei.faur@gmail.com"
            delay={0.05}
          >
            <IconMail size={18} /> Email
          </ContactQuickLink>
          <ContactQuickLink
            href="https://www.linkedin.com/in/bogdan-andrei-faur/"
            delay={0.1}
            rel="noreferrer"
          >
            <IconBrandLinkedin size={18} /> LinkedIn
          </ContactQuickLink>
          <ContactQuickLink
            href="https://github.com/Bogdan-Andrei-Faur"
            delay={0.15}
            rel="noreferrer"
          >
            <IconBrandGithub size={18} /> GitHub
          </ContactQuickLink>
        </m.div>

        <m.form
          onSubmit={handleSubmit}
          className="bg-white/70 w-full max-w-xl backdrop-blur-md border border-white/90 rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-black/80 mb-1"
            >
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              className="w-full rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-black/90 outline-none focus:ring-2 focus:ring-black/40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-black/80 mb-1"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className="w-full rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-black/90 outline-none focus:ring-2 focus:ring-black/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-black/80 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="contact-message"
              rows={5}
              className="w-full rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-black/90 outline-none focus:ring-2 focus:ring-black/40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
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
