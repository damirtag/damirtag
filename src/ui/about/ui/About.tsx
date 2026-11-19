import React from "react";
import { PixelHero } from "./PixelHero";
import {
  BriefcaseIcon,
  MapPinIcon,
  MountainsIcon,
  UserIcon,
} from "@phosphor-icons/react/ssr";

const yearsSince = (y: number, m = 0, d = 1) => {
  const now = new Date();
  const passed =
    now.getMonth() > m || (now.getMonth() === m && now.getDate() >= d);
  return now.getFullYear() - y - (passed ? 0 : 1);
};

const AboutSection: React.FC = () => {
  const facts = [
    { icon: UserIcon, label: "age", value: `${yearsSince(2006, 5, 19)}` },
    {
      icon: BriefcaseIcon,
      label: "experience",
      value: `${new Date().getFullYear() - 2023}+ years`,
    },
    { icon: MapPinIcon, label: "based in", value: "Almaty · UTC+5" },
    {
      icon: MountainsIcon,
      label: "off-screen",
      value: "hiking & mountaineering",
    },
  ];

  return (
    <section id="about" className="w-full py-24">
      <div className="reveal max-w-5xl mx-auto px-6 w-full">
        <p className="text-xl text-phos-500 mb-3">01 // about</p>
        <h2 className="text-xl md:text-3xl text-white mb-12">WHO AM I</h2>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-10">
            <PixelHero />
            <div className="flex flex-col gap-5 text-2xl text-neutral-400 max-w-2xl">
              <p>
                Software engineer from Almaty. I build event-driven services,
                APIs and data pipelines, and like owning them past the deploy.
              </p>
              <p>
                Happiest when a slow query gets fast, a tangle of synchronous
                calls turns into clean events, or a server just quietly stays
                up.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="px-box px-hover p-4 flex flex-col gap-2"
              >
                <Icon size={28} weight="duotone" className="text-phos-400" />
                <dt className="text-lg text-neutral-500">{label}</dt>
                <dd className="text-2xl text-neutral-100">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
