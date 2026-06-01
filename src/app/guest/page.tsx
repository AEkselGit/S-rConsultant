import Guest_Check_In_Form from "@/components/Guest_Check_In_Form";
import React from "react";

export default function GuestPage() {
  return (
    <div>
      <h1 className="text-4xl mt-10 mb-20 text-center">Guest Check-in</h1>
      <Guest_Check_In_Form />
    </div>
  );
}
