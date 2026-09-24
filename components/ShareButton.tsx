// components/ShareButton.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { Locale, getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface ShareButtonProps {
  title: string;
  lang?: Locale;
  text?: string;
  url?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to textarea
    }
  }

  if (typeof document !== "undefined") {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      textArea.style.left = "-9999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) return true;
    } catch {
      // Fall through
    }
  }

  return false;
}

export function ShareButton({
  title,
  lang,
  text,
  url,
  className,
  variant = "outline",
  size = "default",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  // Active locale detection
  const currentLang: Locale =
    lang || (pathname?.startsWith("/en") ? "en" : "tr");
  const isTr = currentLang === "tr";
  const dict = getDictionary(currentLang);

  const shareLabel = isTr ? "Rotayı Paylaş" : "Share Route";
  const copiedLabel =
    dict.common.copied || (isTr ? "Kopyalandı!" : "Copied!");
  const shareText =
    text ||
    (isTr
      ? `Kuzey Kıbrıs Rota Önerisi: ${title}`
      : `Northern Cyprus Road Trip Route: ${title}`);

  const handleShare = async () => {
    const targetUrl =
      url ||
      (typeof window !== "undefined"
        ? window.location.href.split("#")[0]
        : "https://drivenorthcyprus.com");

    // Check if the device / browser natively supports Web Share API (navigator.share)
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: targetUrl,
        });
        return;
      } catch (err: unknown) {
        // If the user cancelled or closed the system share sheet, exit cleanly without copying
        if (
          err instanceof Error &&
          (err.name === "AbortError" || err.name === "NotAllowedError")
        ) {
          return;
        }
      }
    }

    // Fallback: If device/browser does not support navigator.share (e.g. desktop Firefox), copy to clipboard
    const success = await copyToClipboard(targetUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleShare}
      variant={variant}
      size={size}
      className={cn(
        "flex items-center justify-center gap-2 transition-all duration-200 select-none",
        copied &&
          "border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold",
        className
      )}
      aria-label={copied ? copiedLabel : shareLabel}
      title={copied ? copiedLabel : shareLabel}
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 animate-in zoom-in-75 duration-200" />
      ) : (
        <Share2 className="h-4 w-4 shrink-0" />
      )}
      <span className="truncate">{copied ? copiedLabel : shareLabel}</span>
    </Button>
  );
}
