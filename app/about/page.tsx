import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo/metadata";
import { aboutData } from "@/content/about";

export const metadata = constructMetadata({
  title: "About Mareena Tessa Thomas | Corporate Structuring & Company Formation UAE",
  description:
    "Meet Mareena Tessa Thomas – a straight-talking Business Consultant specializing in Corporate Structuring & Company Formation in the UAE, and Founder of 360° HUB L.L.C.",
  path: "/about",
  type: "profile",
});

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-[#080A0C] text-white">
      {/* 01. Editorial Monograph Masthead */}
      <header className="border-b border-white/10 pt-10 pb-8 sm:pt-14 sm:pb-10 bg-[#06080A]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#8E99A8] font-medium block">
                {aboutData.brand}
              </span>
              <span className="text-sm font-serif text-[#C5CCD6] italic mt-1 block">
                Consultant Profile &amp; Story
              </span>
            </div>
            <div className="text-xs tracking-wider uppercase text-[#717A87]">
              Dubai, United Arab Emirates
            </div>
          </div>
        </Container>
      </header>

      {/* 02. Editorial Story Layout: Sticky Portrait Sidebar + Unfolding Narrative */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Sticky Editorial Portrait Dossier */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="relative rounded-sm overflow-hidden bg-[#0E1216] border border-white/15 shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/mareena-about.jpeg"
                    alt="Mareena Tessa Thomas"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C]/85 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 space-y-4 bg-[#0A0D10] border-t border-white/10">
                  <div>
                    <h2 className="font-serif text-xl font-normal text-white">
                      Mareena Tessa Thomas
                    </h2>
                    <p className="text-xs text-[#8E99A8] mt-1">
                      Business Consultant &bull; Founder of 360° HUB L.L.C., UAE
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href={aboutData.letsConnect.linkedInPrompt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between px-4 py-2.5 rounded-xs bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5CCD6]" />
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between px-4 py-2.5 rounded-xs bg-[#EAE6DF] hover:bg-white text-[#080A0C] text-xs font-semibold tracking-tight transition-colors"
                    >
                      <span>Schedule a Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Unbroken Narrative Reading Flow */}
            <div className="lg:col-span-7 space-y-14 sm:space-y-16">
              {/* Chapter 1: Introduction */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium">
                  Introduction
                </div>

                {/* Exact Client Intro Headline */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.18] tracking-tight">
                  {aboutData.intro.headline}
                </h1>

                {/* Exact Client Intro Lead */}
                <p className="text-lg sm:text-xl text-[#C5CCD6] leading-relaxed font-normal">
                  {aboutData.intro.lead}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* Chapter 2: Purpose & Passion */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium">
                  Mission &amp; Approach
                </div>

                {/* Exact Client Supporting Statement */}
                <blockquote className="font-serif text-2xl sm:text-3xl text-white font-normal leading-[1.28] italic border-l-2 border-[#EAE6DF] pl-6 sm:pl-8 py-1">
                  &ldquo;{aboutData.supportingEntrepreneurs.statement}&rdquo;
                </blockquote>

                {/* Exact Client Commitment */}
                <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                  {aboutData.supportingEntrepreneurs.commitment}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* Chapter 3: 360° HUB L.L.C., UAE */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium">
                  Consultancy Firm
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    360° HUB L.L.C., UAE
                  </h2>

                  {/* Exact Client Paragraph 1 */}
                  <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                    {aboutData.hubCompany.overview}
                  </p>

                  {/* Exact Client Paragraph 2 */}
                  <div className="p-6 rounded-xs bg-[#0E1216] border border-white/10">
                    <p className="text-base sm:text-lg text-white leading-relaxed font-normal">
                      {aboutData.hubCompany.synergy}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Chapter 4: Who can work with me? */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium">
                  Client Collaboration
                </div>

                {/* Exact Client Heading */}
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {aboutData.whoCanWorkWithMe.heading}
                </h2>

                {/* Exact Client Description */}
                <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                  {aboutData.whoCanWorkWithMe.description}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* Chapter 5: A little more about me… */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium">
                  Background &amp; Perspective
                </div>

                {/* Exact Client Heading */}
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {aboutData.aLittleMoreAboutMe.heading}
                </h2>

                {/* Exact Client Narrative */}
                <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                  {aboutData.aLittleMoreAboutMe.background}
                </p>

                {/* Exact Client Emotional Quote */}
                <div className="p-6 sm:p-7 rounded-xs bg-[#0E1216] border-l-2 border-[#EAE6DF] border-y border-r border-white/10">
                  <p className="font-serif text-lg sm:text-xl text-white italic leading-snug">
                    &ldquo;{aboutData.aLittleMoreAboutMe.quote}&rdquo;
                  </p>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Chapter 6: Let’s Connect */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium">
                  Next Step
                </div>

                {/* Exact Client Heading */}
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {aboutData.letsConnect.heading}
                </h2>

                {/* Exact Client Connection Text */}
                <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                  {aboutData.letsConnect.connectionText}
                </p>

                {/* Exact Client LinkedIn Prompt */}
                <div className="p-6 rounded-xs bg-[#0E1216] border border-white/10">
                  <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed">
                    {aboutData.letsConnect.linkedInPrompt.beforeLink}
                    <a
                      href={aboutData.letsConnect.linkedInPrompt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline underline-offset-4 decoration-[#EAE6DF] hover:text-[#EAE6DF] font-medium transition-colors"
                    >
                      {aboutData.letsConnect.linkedInPrompt.linkText}
                    </a>
                    {aboutData.letsConnect.linkedInPrompt.afterLink}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#EAE6DF] hover:bg-white text-[#080A0C] font-semibold text-sm rounded-xs tracking-tight transition-all duration-200 shadow-md group"
                  >
                    <span>Connect with Mareena</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
