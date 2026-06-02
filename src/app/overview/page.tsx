import Guests_Table from "@/components/Guest_Table";
import { getGuests } from "@/lib/guests";

export default function OverviewPage() {
  const guests = getGuests();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Visit log</h1>
      </div>

      <Guests_Table guests={guests} />
    </main>
  );
}
