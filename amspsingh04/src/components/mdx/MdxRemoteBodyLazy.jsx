"use client";

import dynamic from "next/dynamic";

const MdxRemoteBody = dynamic(() => import("./MdxRemoteBody"), {
  ssr: false,
  loading: () => (
    <p style={{ color: "#8aa896", fontSize: "0.9rem" }}>Loading article…</p>
  ),
});

export default function MdxRemoteBodyLazy(props) {
  return <MdxRemoteBody {...props} />;
}
