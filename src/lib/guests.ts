import { db } from "@/lib/db";

export type Guest = {
  id: number;
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  dateOfVisit: string;
};

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

export function getGuests(): Guest[] {
  const guests = db
    .prepare(
      `
      SELECT
        id,
        name,
        company,
        email,
        phoneNumber,
        dateOfVisit
      FROM guests
      ORDER BY dateOfVisit DESC
      `,
    )
    .all() as Guest[];

  return guests;
}
