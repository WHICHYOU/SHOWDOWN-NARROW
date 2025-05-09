"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const steps = [
  "Welcome to Yoister ✨ — Discover your taste through quick choices.",
  "Every choice builds your identity profile. Tag your reasons if you like.",
  "Compare, reflect, and share your vibe. Let’s begin!",
];

export default function OnboardingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem("onboarded");
    if (!seen) setOpen(true);
  }, []);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("onboarded", "true");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogTitle>
          🪐 Step {step + 1} of {steps.length}
        </DialogTitle>
        <p className="text-sm mt-2">{steps[step]}</p>
        <Button className="mt-4 w-full" onClick={next}>
          {step === steps.length - 1 ? "Let's Go!" : "Next →"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
