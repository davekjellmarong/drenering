// app/providers.jsx
"use client";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import PostHogPageView from "./PostHogPageView";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        // Cookieless: nothing is stored on the visitor's device, so no cookie
        // consent is needed. The privacy policy (/juridisk/personvern) relies
        // on this; don't change it without adding a consent banner.
        persistence: "memory",
        disable_session_recording: true,
        person_profiles: "identified_only",
        capture_pageleave: true,
        // capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
