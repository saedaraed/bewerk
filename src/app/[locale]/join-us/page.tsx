"use client";
import Button from "@/components/Button";
import { useState } from "react";

const Partner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    address: "",
    message: "",
    gender: "",
    birthDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement  | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main>
      <div className="absolute top-0 bg-[#100F0F] w-full py-30 z-2">
        <h2 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4 text-center">
          Werde Teil unseres Teams
        </h2>
      </div>
      <div className="md:w-[60%] w-[90%]  mx-auto mt-60 text-[20px] text-center py-10 text-white/80 leading-[40px]">
        <p>Wir bei Bewek sind setes auf der Suche nach engagierten und motivierten Personalichkeiten , die unser Team verstarken mochten . Wenn du nach einer beruflichen Chance in einem professionellen und angenehmen Umfeld suchst - dann bist du hier genau richtig!</p>
      </div>
      <div className="md:w-[60%] w-[90%] mx-auto bg-[#100F0F] rounded-[40px] p-10 mb-[100px]">
        <h2 className="text-[25px]">Bewerbungsformular</h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Vollständiger Name"
              id="name"
              onChange={handleChange}
              value={formData.fullName}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
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
              placeholder="Telefonnummer"
              id="telephone"
              onChange={handleChange}
              value={formData.telephone}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            />
          </div>
          <div>
                      <select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            required
            className="w-full p-3 rounded-lg border border-white/50 text-white/50 bg-[#100F0F] outline-none focus:border-[#2BA7FF]"
          >
            <option value="">Geschlecht auswählen</option>
            <option value="männlich">Männlich</option>
            <option value="weiblich">Weiblich</option>
          </select>
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="Adresse"
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
            onChange={handleChange}
            value={formData.birthDate}
            required
            className="w-full p-3 rounded-lg border border-white/50 text-white/50 bg-[#100F0F] outline-none focus:border-[#2BA7FF]"
          />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Erzahl uns uber dich"
              rows={5}
              onChange={handleChange}
              value={formData.message}
              required
              className="w-full p-3 rounded-lg border border-white/50 text-white/50 outline-none  focus:border-[#2BA7FF]"
            ></textarea>
          </div>

          <Button name="Senden" textColor = "text-white" bgColor = "bg-[#2BA7FF]"/>
        </form>
      </div>
    </main>
  );
};

export default Partner;
