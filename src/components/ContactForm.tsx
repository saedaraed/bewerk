"use client";
import { useState } from "react";
import Button from "./Button";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };


     const t =  useTranslations("Job");

  return (
    <section className="bg-white text-white py-12 px-6 rounded-[40px] max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
       
          <input
            type="text"
            name="name"
            placeholder={t('Full-name')}
            id="name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-full p-3 rounded-lg border border-[#000000]/50 text-[#000000]/50 outline-none  focus:border-[#2BA7FF]"
          />
        </div>

        <div>
       
          <input
            type="email"
            name="email"
            placeholder={t('email')}
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full p-3 rounded-lg border border-[#000000]/50 text-[#000000]/50 outline-none  focus:border-[#2BA7FF]"
          />
        </div>

        <div>
      
          <input
            type="tel"
            name="telefon"
            placeholder={t('telephone')}
            id="telephone"
            onChange={handleChange}
            value={formData.telephone}
            required
            className="w-full p-3 rounded-lg border border-[#000000]/50 text-[#000000]/50 outline-none  focus:border-[#2BA7FF]"
          />
        </div>

        <div>
    
          <textarea
            name="message"
            id="message"
            placeholder='Message'
            rows={5}
            onChange={handleChange}
            value={formData.message}
            required
            className="w-full p-3 rounded-lg border border-[#000000]/50 text-[#000000]/50 outline-none  focus:border-[#2BA7FF]"
          ></textarea>
        </div>

        <Button name={t('send')} textColor = "text-white" bgColor = "bg-[#2BA7FF]"/>
      </form>
    </section>
  );
};

export default ContactForm;
