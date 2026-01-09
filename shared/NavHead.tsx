"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  CalendarDays,
  Mail,
} from "lucide-react";

export default function NavHead({ scrolled }: { scrolled: boolean }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //   const formattedTime = currentTime.toLocaleTimeString("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   });

  return (
    <section
      className={`w-full bg-[#00019A] text-white overflow-hidden transition-all duration-500 ease-in-out md:block hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
      }`}
    >
      <div className="px-4 h-7 flex items-center justify-between text-sm max-w-full mx-auto">
        <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm">
          {/* <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{formattedTime}</span>
          </div> */}
          {/* <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{formattedDate}</span>
          </div> */}
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+880 1373 784323</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@faclbangladesh.com</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Facebook
            size={14}
            className="hover:text-blue-300 cursor-pointer transition"
          />
          <Twitter
            size={14}
            className="hover:text-sky-400 cursor-pointer transition"
          />
          <Linkedin
            size={14}
            className="hover:text-blue-400 cursor-pointer transition"
          />
        </div>
      </div>
    </section>
  );
}
