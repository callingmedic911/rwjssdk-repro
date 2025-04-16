"use client";

import { useState, useEffect } from "react";
import { TestServer } from "./TestServer";

export function TestClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading. This is client component, sub component is server component</div>;
  }

  return <TestServer />;
}