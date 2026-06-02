import type { Guest } from "@/lib/guests";

type GuestsTableProps = {
  guests: Guest[];
};

export default function Guests_Table({ guests }: GuestsTableProps) {
  if (guests.length === 0) {
    return (
      <div className="rounded border p-4">No guests have checked in yet.</div>
    );
  }

  return (
    <div className="md:w-full overflow-x-auto rounded border-2 border-primary">
      <table className="md:w-full table-fixed border-collapse text-left">
        <thead className="border-b border-secondary bg-secondary">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Company</th>
            <th className="p-3">E-Mail</th>
            <th className="p-3">Phone Number</th>
            <th className="p-3">Date of Visit</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              className="border-b border-secondary odd:bg-background even:bg-secondary/30 last:border-b-0"
            >
              <td className="p-3 md:wrap-break-word">{guest.name}</td>
              <td className="p-3 md:wrap-break-word">{guest.company}</td>
              <td className="p-3 md:wrap-break-word">{guest.email}</td>
              <td className="p-3 md:wrap-break-word">{guest.phoneNumber}</td>
              <td className="p-3 md:wrap-break-word">{guest.dateOfVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
