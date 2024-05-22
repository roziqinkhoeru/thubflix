"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function ButtonBack() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button variant="secondary" onClick={handleClick}>
      Back
    </Button>
  );
}

export default ButtonBack;
