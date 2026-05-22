"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */
interface FloatingCardBaseProps {
  variant?: "default";
  bgColor: string;
  textColor: string;
  rotation?: number;
  iconSrc: string;
  iconRotation?: number;
  label: string;
  shadowColor: string;
  className?: string;
  floatSpeed?: "slow" | "mid" | "fast";
  animDelay?: number;
  /** Desktop icon container size. Default 80 */
  iconSize?: number;
  /** Gap between icon and label. Default 12 */
  gap?: number;
}

interface FloatingCardPortalProps {
  variant: "portal";
  bgColor?: string;
  rotation?: number;
  className?: string;
  floatSpeed?: "slow" | "mid" | "fast";
  animDelay?: number;
  shadowColor?: string;
}

export type FloatingCardProps = FloatingCardBaseProps | FloatingCardPortalProps;

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function FloatingCard(props: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  /* Entrance + floating animation via GSAP */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const delay = props.animDelay ?? 0;
    const floatDuration =
      props.floatSpeed === "slow"
        ? 4.5
        : props.floatSpeed === "fast"
          ? 2.5
          : 3.5;

    // Entrance fade-up
    gsap.fromTo(
      el,
      { opacity: 0, y: 18, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        delay,
        ease: "power3.out",
      }
    );

    // Continuous float
    gsap.to(el, {
      y: -10,
      duration: floatDuration,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay + 0.85,
    });

    return () => {
      gsap.killTweensOf(el);
    };
  }, [props.animDelay, props.floatSpeed]);

  /* ── Portal variant ── */
  if (props.variant === "portal") {
    const rot = props.rotation ?? 3.4;

    const handleMouseEnter = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, { scale: 1.06, rotation: rot + 2, duration: 0.3, ease: "power2.out", overwrite: "auto" });
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, { scale: 1, rotation: rot, duration: 0.3, ease: "power2.out", overwrite: "auto" });
    };

    return (
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`card-base absolute flex items-center rounded-[90px] bg-[#9ea6ef]
          shadow-[0_14px_32px_rgba(106,123,214,0.30)] overflow-hidden
          cursor-default
          ${props.className ?? ""}`}
        style={{
          transform: `rotate(${rot}deg)`,
          opacity: 0,
        }}
      >
        {/* Orange accent bar */}
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2 h-[38px] w-[5px] rounded-full bg-[#eb7a24]" />

        {/* Avatar */}
        <div className="ml-[46px] grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-[#f4c8ab]">
          <Image
            src="/icons/flaticon-avatar.png"
            alt=""
            aria-hidden
            width={28}
            height={28}
            className="h-[65%] w-[65%] object-contain"
          />
        </div>

        {/* Text block */}
        <div className="min-w-0 ml-3">
          <p className="truncate text-[18px] font-medium leading-none text-[#0c144b]">
            John Doe - Portal
          </p>
          <p className="mt-1 max-w-[180px] text-[11px] leading-[1.2] text-[#797DA7] line-clamp-2">
            Hey! Could you please review a document for me?
          </p>
          <p className="mt-1.5 truncate text-[11px] leading-none text-[#6a77bc]">
            MAT-2233 - 2 h ago
          </p>
        </div>
      </div>
    );
  }

  /* ── Default card variant ── */
  const {
    bgColor,
    textColor,
    rotation = 0,
    iconSrc,
    label,
    shadowColor,
    className = "",
    iconSize = 24,
    gap = 8,
  } = props;

  const handleMouseEnterDefault = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { scale: 1.06, rotation: rotation + 2, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  };

  const handleMouseLeaveDefault = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { scale: 1, rotation: rotation, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnterDefault}
      onMouseLeave={handleMouseLeaveDefault}
      className={`card-base absolute flex items-center justify-center rounded-full px-4 py-2
        cursor-default
        ${className}`}
      style={{
        backgroundColor: bgColor,
        boxShadow: `0 14px 32px ${shadowColor}`,
        transform: `rotate(${rotation}deg)`,
        opacity: 0,
        gap,
      }}
    >
      {/* Icon container */}
      <span
        className="shrink-0 flex items-center justify-center"
        style={{
          width: iconSize,
          height: iconSize,
        }}
      >
        <Image
          src={iconSrc}
          alt=""
          aria-hidden
          width={iconSize}
          height={iconSize}
          className="max-h-full max-w-full object-contain"
          style={{ width: iconSize, height: iconSize }}
        />
      </span>

      {/* Label */}
      <span
        className="text-[18px] font-normal tracking-tight whitespace-nowrap"
        style={{ color: textColor }}
      >
        {label}
      </span>
    </div>
  );
}
