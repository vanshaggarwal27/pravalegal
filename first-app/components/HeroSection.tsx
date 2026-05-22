"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import FloatingCard from "./FloatingCard";

/* ================================================================
   Decorative background pill blobs (absolute-positioned)
   ================================================================ */
function BackgroundBlobs() {
  return (
    <>
      {/* ── LEFT-SIDE blobs (near bottom-left) ── */}
      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="absolute -left-10 bottom-[150px] h-[36px] w-[75px] rotate-[170deg] rounded-[90px] bg-[#E3EAF8] blur-[0.5px] dark:bg-[#598f7b]" />
        <div className="absolute -left-6 bottom-[105px] h-[36px] w-[80px] rotate-[-180deg] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] blur-[0.5px] dark:bg-[#20284a]" />
        <div className="absolute -left-2 bottom-[60px] h-[36px] w-[134px] rotate-[-180deg] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] blur-[0.5px] dark:bg-[#20284a]" />
        {/* Mobile right */}
        <div className="absolute right-[-40px] top-[110px] h-[36px] w-[99px] rotate-[9deg] rounded-tl-[90px] rounded-bl-[90px] rounded-tr-[15px] rounded-br-[15px] bg-[#E3EAF8] blur-[0.5px] dark:bg-[#242d54]" />
        <div className="absolute right-[-25px] top-[155px] h-[36px] w-[143px] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] blur-[0.5px] dark:bg-[#242d54]" />
        <div className="absolute right-[-15px] top-[200px] h-[36px] w-[86px] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] blur-[0.5px] dark:bg-[#242d54]" />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="absolute -left-28 bottom-[290px] h-[88px] w-[280px] -rotate-[10deg] rounded-full bg-[#e7ecf8] blur-[0.5px] dark:bg-[#20284a]" />
        <div className="absolute -left-16 bottom-[180px] h-[88px] w-[300px] rounded-full bg-[#e7ecf8] blur-[0.5px] dark:bg-[#20284a]" />
        <div className="absolute -left-8 bottom-[70px] h-[88px] w-[480px] rounded-full bg-[#e7ecf8] blur-[0.5px] dark:bg-[#20284a]" />

        {/* ── RIGHT-SIDE blobs (near top-right) ── */}
        <div className="absolute right-[-78px] top-[112px] h-[88px] w-[280px] rotate-[8deg] rounded-full bg-[#e7ecf8] blur-[0.5px] dark:bg-[#242d54]" />
        <div className="absolute right-[-45px] top-[224px] h-[88px] w-[400px] rounded-full bg-[#e7ecf8] blur-[0.5px] dark:bg-[#242d54]" />
        <div className="absolute right-[-24px] top-[334px] h-[88px] w-[300px] rounded-full bg-[#e7ecf8] blur-[0.5px] dark:bg-[#242d54]" />
      </div>
    </>
  );
}

/* ================================================================
   MOBILE floating cards composition
   ================================================================ */
function MobileCards() {
  return (
    <div className="relative mt-16 w-full max-w-[360px] lg:hidden" style={{ height: 260 }}>
      <div
        className="relative h-[260px] w-[360px]"
        style={{
          transformOrigin: "top left",
          transform: "scale(min(1, calc((100vw - 32px) / 360)))"
        }}
      >
        {/* Billing — top right */}
        <FloatingCard
          bgColor="#2f46ff"
          textColor="#ffffff"
          rotation={10.2}
          iconSrc="/icons/billing.svg"
          iconRotation={-12}
          label="Billing"
          shadowColor="rgba(47,70,255,0.28)"
          className="right-1 top-2 !h-[46px] !w-[166px] !rounded-[100px] !px-4 !py-2.5 [&>span:last-child]:!text-[14px]"
          floatSpeed="mid"
          animDelay={0.1}
          iconSize={24}
        />

        {/* Matters — left */}
        <FloatingCard
          bgColor="#e67e2b"
          textColor="#ffffff"
          rotation={-10.2}
          iconSrc="/icons/matter.svg"
          iconRotation={12}
          label="Matters"
          shadowColor="rgba(230,126,43,0.28)"
          className="left-[6px] top-[10px] !h-[46px] !w-[151px] !rounded-[100px] !px-4 !py-2.5 [&>span:last-child]:!text-[14px]"
          floatSpeed="slow"
          animDelay={0.2}
          iconSize={24}
        />

        {/* Portal card — center */}
        <FloatingCard
          variant="portal"
          rotation={5.5}
          className="left-[111px] top-[80px] !h-[46px] !w-[245px] !rounded-[90px] !px-3.5 [&_p:nth-child(2)]:hidden [&_p:nth-child(3)]:hidden [&_p:first-child]:!text-[14px] [&_p:first-child]:!leading-none"
          floatSpeed="slow"
          animDelay={0.35}
        />

        {/* Tasks — bottom left */}
        <FloatingCard
          bgColor="#2f254d"
          textColor="#f08c2b"
          rotation={11.3}
          iconSrc="/icons/task.svg"
          iconRotation={-24.6}
          label="Tasks"
          shadowColor="rgba(47,37,77,0.35)"
          className="left-[36px] top-[130px] !h-[46px] !w-[166px] !rounded-[100px] !px-4 !py-2.5 [&>span:last-child]:!text-[14px]"
          floatSpeed="mid"
          animDelay={0.45}
          iconSize={24}
        />

        {/* Documents — bottom right */}
        <FloatingCard
          bgColor="#2f254d"
          textColor="#f08c2b"
          rotation={-5.7}
          iconSrc="/icons/document.svg"
          iconRotation={5.7}
          label="Documents"
          shadowColor="rgba(47,37,77,0.35)"
          className="left-[145px] top-[190px] !h-[46px] !w-[201px] !rounded-[100px] !px-4 !py-2.5 [&>span:last-child]:!text-[14px]"
          floatSpeed="mid"
          animDelay={0.55}
          iconSize={24}
        />
      </div>
    </div>
  );
}

/* ================================================================
   DESKTOP floating cards composition
   ================================================================ */
function DesktopCards() {
  return (
    <div className="absolute inset-0 z-10 hidden lg:block translate-y-[60px]">
      {/* Billing — top right area */}
      <FloatingCard
        bgColor="#2f46ff"
        textColor="#ffffff"
        rotation={9.35}
        iconSrc="/icons/billing.svg"
        iconRotation={-11}
        label="Billing"
        shadowColor="rgba(47,70,255,0.28)"
        className="right-[120px] top-[240px] w-[430px]"
        floatSpeed="mid"
        animDelay={0.2}
        iconSize={64}
      />

      {/* Matters — left-middle */}
      <FloatingCard
        bgColor="#e67e2b"
        textColor="#ffffff"
        rotation={-9.35}
        iconSrc="/icons/matter.svg"
        iconRotation={11}
        label="Matters"
        shadowColor="rgba(230,126,43,0.28)"
        className="left-[200px] top-[390px] w-[360px]"
        floatSpeed="slow"
        animDelay={0.35}
        iconSize={64}
      />

      {/* Portal card — center right */}
      <FloatingCard
        variant="portal"
        rotation={3.4}
        className="left-[580px] top-[390px] h-[96px] w-[390px] !pl-10 [&>div:last-child]:ml-2"
        floatSpeed="slow"
        animDelay={0.5}
        shadowColor="rgba(106,123,214,0.30)"
      />

      {/* Tasks — bottom center */}
      <FloatingCard
        bgColor="#2f254d"
        textColor="#f08c2b"
        rotation={0}
        iconSrc="/icons/task.svg"
        iconRotation={-13.3}
        label="Tasks"
        shadowColor="rgba(47,37,77,0.35)"
        className="left-[calc(50%-200px)] top-[530px] w-[360px]"
        floatSpeed="mid"
        animDelay={0.6}
        iconSize={64}
      />

      {/* Documents — bottom right */}
      <FloatingCard
        bgColor="#2f254d"
        textColor="#f08c2b"
        rotation={-6.8}
        iconSrc="/icons/document.svg"
        iconRotation={6.8}
        label="Documents"
        shadowColor="rgba(47,37,77,0.35)"
        className="right-[-82px] top-[500px] w-[480px]"
        floatSpeed="mid"
        animDelay={0.7}
        iconSize={64}
      />
    </div>
  );
}

/* ================================================================
   HeroSection — main exported component
   ================================================================ */
export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (subtextRef.current) {
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main className="relative min-h-0 overflow-x-hidden bg-[#f6f7fb] text-[#0f172a] lg:min-h-screen dark:bg-[#0c0f1a] dark:text-[#e2e8f0]">
      {/* Background decorative blobs */}
      <BackgroundBlobs />

      <section className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-6 sm:px-6 md:px-10 md:pt-8 lg:h-full lg:px-16 lg:pt-10">
        {/* ── LEFT: Text content ── */}
        <div className="relative z-20 max-w-[580px] self-start">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="w-full max-w-[320px] text-left text-[32px] font-light leading-[1.08] tracking-[-0.03em] text-[#7377a8] sm:w-auto sm:max-w-none sm:text-[50px] dark:text-[#b3bce5]"
            style={{ wordSpacing: "0.08em", opacity: 0 }}
          >
            {/* Mobile version */}
            <span className="sm:hidden">
              A single platform to
              <br />
              <span className="font-bold text-[#6971aa] dark:text-[#d4ddff]">
                manage
              </span>{" "}
              every part
              <br />
              of your{" "}
              <span className="font-bold text-[#6971aa] dark:text-[#d4ddff]">
                legal work
              </span>
            </span>
            {/* Desktop version */}
            <span className="hidden sm:inline">
              A single platform to
              <br />
              <span className="font-bold text-[#6971aa] dark:text-[#d4ddff]">
                manage
              </span>{" "}
              every part of
              <br />
              your{" "}
              <span className="font-bold text-[#6971aa] dark:text-[#d4ddff]">
                legal work
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            className="mt-6 w-full max-w-[280px] text-left text-[17px] font-normal leading-[1.45] text-[#5569ff] sm:w-[80%] sm:max-w-[540px] sm:text-[20px] lg:text-[21px] dark:text-[#88a0ff]"
            style={{ wordSpacing: "0.06em", opacity: 0 }}
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </p>

          {/* Mobile floating cards */}
          <MobileCards />
        </div>

        {/* ── RIGHT: Desktop floating cards ── */}
        <DesktopCards />
      </section>
    </main>
  );
}
