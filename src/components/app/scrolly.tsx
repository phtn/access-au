"use client";
import React from "react";
import {
  StickyScroll,
  type StickyScrollContent,
} from "@/components/ui/sticky-reveal";

export function Scrolly(props: { content: StickyScrollContent[] }) {
  return (
    <div className="flex w-full justify-center text-gray-800">
      <StickyScroll content={props.content} />
    </div>
  );
}
