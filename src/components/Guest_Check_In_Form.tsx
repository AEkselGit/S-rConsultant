"use client";

import FormField from "./Form_Field";

export default function Guest_Check_In_Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
    };

    console.log(values);
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
            className="bg-primary text-background p-2 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
