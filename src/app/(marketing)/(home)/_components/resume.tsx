"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CompanyResume({ ...props }) {
  const data = props.data;
  return (
    <section className="section overflow-hidden" data-padding="sm" {...props}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 z-0" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Logo */}
            <BrandLogo width={180} />

            {/* Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
                {data.title.split(" ")[0]}{" "}
                <span className="text-rose-600">
                  {data.title.split(" ")[1]}
                </span>
              </h1>
              <div className="h-1 w-20 bg-rose-600 rounded-full mb-6"></div>
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                {data.description}
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium">
                HEALTH
              </div>
              <div className="px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium">
                EDUCATION
              </div>
              <div className="px-4 py-2 bg-rose-100 rounded-full text-rose-700 font-medium">
                EMPOWERMENT
              </div>
              <div className="px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-medium">
                RELIEF
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button asChild>
                <Link href="/">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              width={600}
              height={600}
              src="/assets/images/homepage/resume.png"
              alt="A diverse group of people gathered together"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="text-white/90 text-sm">
                Making a difference in communities around the world
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    </section>
  );
}
