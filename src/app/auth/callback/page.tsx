"use client";
import React, { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
function PageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const refreshToken = searchParams?.get("refresh-token") || "";
    const accessToken = searchParams?.get("access-token") || "";
    const expiresIn = searchParams?.get("expires_in") || "";

    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("expiresIn", expiresIn);

    if (expiresIn) {
      const currentTime = new Date();
      const expiresAt = new Date(currentTime.getTime() + parseInt(expiresIn, 10) - 10 * 60 * 1000);
      sessionStorage.setItem("expiresAt", expiresAt.toISOString());
    }
    fetch("https://user-service.edgescheduler.co.kr/auth/me", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
      });

    router.push("/main/schedule");
  }, [searchParams, router]);

  return <div></div>;
}
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
