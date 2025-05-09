"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const OnboardingModal = () => {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);

  const steps = [
    {
      title: "Welcome to Yoister",
      description:
        "You are what you choose. This is your taste graph in the making.",
    },
    {
      title: "Make Choices",
      description:
        "Choose between two things — ramen or pasta, Mac or Windows. Each choice shapes your identity.",
    },
    {
      title: "See Your Profile",
      description:
        "Get smart summaries, tribe vibes, and compare your taste with friends.",
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md text-center space-y-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {steps[step].title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">
          {steps[step].description}
        </p>
        <Button onClick={handleNext} className="w-full">
          {step < steps.length - 1 ? "Next" : "Let's Start"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
