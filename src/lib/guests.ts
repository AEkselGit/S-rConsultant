import { db } from "@/lib/db";

export function createGuest(values: {
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
}) {
  const insertGuest = db.prepare(`
    INSERT INTO guests (
      name,
      company,
      email,
      phoneNumber,
      dateOfVisit
    ) VALUES (
      @name,
      @company,
      @email,
      @phoneNumber,
      datetime('now')
    )
  `);

  const result = insertGuest.run(values);

  return result.lastInsertRowid;
}
