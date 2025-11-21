"use client";
import React, { useState, useEffect, memo } from "react";
import { AppIcons } from "@/data/appIcons";
import "./BranchFooter.scss";
import dynamic from "next/dynamic";
const Icon = dynamic(() => import("@iconify/react").then((m) => m.Icon), {
  ssr: false,
});
import Image from "next/image";

const clocks = [
  {
    city: "USA",
    address: `2000 N Central Expressway
              <br />
              Suite 220
              <br />
              Plano, TX 75074
              <br />
              United States`,
    email: "inquiry@mol-tech.us",
    phone: "+1-945-209-7691",
    timezone: "America/New_York",
    flag: AppIcons.USA,
  },
  {
    city: "Singapore",
    address: `408 Joo Chiat Place<br/>Singapore (428085)`,
    email: "inquiry@mol-tech.us",
    phone: "+65 8753 5833",
    timezone: "Asia/Singapore",
    flag: AppIcons.Singapore,
  },
  {
    city: "Switzerland",
    address: `Kirchmooshöhe 4<br/>4800 Zofingen`,
    email: "inquiry@mol-tech.us",
    // phone: `&nbsp;`,
    timezone: "Europe/Zurich",
    flag: AppIcons.Switzerland,
  },
  {
    city: "India",
    address: `5th Floor, 506,<br/> Dwarkesh business hub <br/> Opp. Visamo Society, Motera,<br/> 380005, Ahmedabad, Gujarat`,
    email: "inquiry@mol-tech.us",
    phone: "+91 81286 94374",
    timezone: "Asia/Kolkata",
    flag: AppIcons.India,
  },
];

const ClockCard = memo(function ClockCard({
  city,
  address,
  timezone,
  flag,
  email,
  phone,
}) {
  ClockCard.displayName = "ClockCard";
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });

  const getTimeParts = (tz) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(new Date());
    const timeObj = {};
    parts.forEach((part) => {
      if (["hour", "minute", "second"].includes(part.type)) {
        timeObj[part.type] = parseInt(part.value, 10);
      }
    });

    return timeObj;
  };

  useEffect(() => {
    const update = () => {
      setTime(getTimeParts(timezone));
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  const hourDeg = ((time.hour % 12) + time.minute / 60) * 30 - 90;
  const minuteDeg = (time.minute + time.second / 60) * 6 - 90;
  const secondDeg = time.second * 6 - 90;

  return (
    <>
      <div className="clock-card-container">
        <div className="city-title">
          <Image
            src={flag}
            alt={`${city} flag`}
            width={32}
            height={23}
            loading="lazy"
            priority={false}
          />
          {city}
        </div>
        <div className="clock-card">
          <div className="clock">
            <div className="clock-face">
              <div className="number number-12">12</div>
              <div className="number number-3">3</div>
              <div className="number number-6">6</div>
              <div className="number number-9">9</div>

              {[...Array(60)].map((_, i) => (
                <div
                  key={i}
                  className="tick"
                  style={{
                    transform: `rotate(${i * 6}deg)`,
                    opacity: i % 5 === 0 ? 0 : 1,
                  }}
                />
              ))}

              <div
                className="hand hour"
                style={{ transform: `rotate(${hourDeg}deg)` }}
              />
              <div
                className="hand minute"
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              />
              <div
                className="hand second"
                style={{ transform: `rotate(${secondDeg}deg)` }}
              />
              <div className="center-dot" />
            </div>
            <div className="timezone">{`${String(time.hour).padStart(
              2,
              "0"
            )}:${String(time.minute).padStart(2, "0")}`}</div>
          </div>

          <div className="clock-info">
            <div
              dangerouslySetInnerHTML={{ __html: address }}
              className="address-box"
            ></div>
            <div className="icon-box">
              <Icon icon="quill:mail" />
              <span className="address-box">{email}</span>
            </div>
            {phone && (
              <div className="icon-box">
                <Icon icon="solar:phone-outline" />
                <span
                  className="address-box"
                  dangerouslySetInnerHTML={{ __html: phone || "-" }}
                ></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

const BranchFooter = memo(() => {
  BranchFooter.displayName = "BranchFooter";
  return (
    <section className="world-clock-section">
      <div className="container">
        <div className="main-title">
          Connecting Continents,{" "}
          <span className="highlight">Empowering Businesses</span>
        </div>
        <div className="sub-title">
          Our branch offices ensure seamless support across the globe.
        </div>
        <div className="world-clock-row">
          {clocks.map((item, index) => (
            <ClockCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default BranchFooter;
