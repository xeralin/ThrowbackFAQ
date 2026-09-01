"use client";

import { OptionGroup, type Option } from "@/components/OptionGroup";
import { setMethod, useStoredMethod, type Method } from "@/lib/method";
import { usePlatform } from "@/lib/platform";

const METHODS: Option<Method>[] = [
  { id: "launcher", label: "Xera's Launcher" },
  { id: "downloader", label: "JVAV's Downloader" },
];

export function MethodSwitch() {
  const method = useStoredMethod();
  const hidden = usePlatform() === "linux";
  return (
    <div
      inert={hidden}
      className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
        hidden
          ? "mb-0 grid-rows-[0fr] opacity-0"
          : "mb-8 grid-rows-[1fr] opacity-100"
      }`}
    >
      <div className="overflow-hidden">
        <OptionGroup
          options={METHODS}
          active={method}
          onSelect={setMethod}
          label="Method"
        />
      </div>
    </div>
  );
}
