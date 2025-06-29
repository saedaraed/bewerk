"use client";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Partner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    telephone: "",
    address: "",
    birthDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
   const t =  useTranslations("Partner-job");

  return (
    <main>
      <div className="absolute top-0 bg-[#100F0F] w-full py-30 z-2">
        <h2 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4 text-center">
          {t('title')}
        </h2>
      </div>
      <div className="md:w-[60%] w-[90%]  mx-auto mt-60 text-[20px] text-center py-10 text-white/80 leading-[40px]">
        <p>{t('question')}</p>
             <p>{t('answer')}</p>

      </div>
      <div className="md:w-[60%] w-[90%] mx-auto bg-[#100F0F] rounded-[40px] p-10 mb-[100px]">
        <h2 className="text-[25px]"> {t('form-title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder={t('owner-name')}
              id="name"
              onChange={handleChange}
              value={formData.fullName}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            />
          </div>
          <div>
            <input
              type="text"
              name="companyname"
              placeholder={t('company-name')}
              id="companyname"
              onChange={handleChange}
              value={formData.companyName}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
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
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
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
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder={t('address')}
              id="address"
              onChange={handleChange}
              value={formData.address}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            />
          </div>
          <div>
  <input
    type="date"
    name="birthDate"
    placeholder={t('birth-date')}
    id="birthDate"
    onChange={handleChange}
    value={formData.birthDate}
    required
    className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none focus:border-[#2BA7FF]"
  />
</div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder={t('message')}
              rows={5}
              onChange={handleChange}
              value={formData.message}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            ></textarea>
          </div>

          <Button name={t('send')}  textColor = "text-white" bgColor = "bg-[#2BA7FF]"/>
        </form>
      </div>
    </main>
  );
};

export default Partner;
