"use client";

import { useState } from "react";
import FormField from "./Form_Field";

type View = "form" | "success";

export default function Guest_Check_In_Form() {
  const [view, setView] = useState<View>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const values = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phoneNumber: String(formData.get("phoneNumber") ?? ""),
    };

    const response = await fetch("/api/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      console.error("Failed to submit guest");
      return;
    }

    setView("success");
  }

  if (view === "success") {
    return (
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4  p-6 text-center">
          <h1 className="text-2xl font-semibold">Check-in complete</h1>
          <p>You have been checked in successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <FormField
          label="Name"
          name="name"
        />
        <FormField
          label="Company"
          name="company"
        />
        <FormField
          label="E-Mail"
          name="email"
        />
        <FormField
          label="Phone Number"
          name="phoneNumber"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary rounded-full p-2 text-background"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
