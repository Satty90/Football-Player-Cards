import { NextResponse } from "next/server";
import pool from "@/app/api/db";

export const GET = async (request) => {
  console.log(request);
  const searchQuery = request.nextUrl.searchParams.get("search");
  console.log(searchQuery);
  if (!searchQuery) {
    return NextResponse.json([]);
  }
  const response = await pool.query(
    "SELECT * FROM players WHERE (first_name || ' ' || last_name) ILIKE $1",
    ["%" + searchQuery + "%"]
  );
  const { rows } = response;
  return NextResponse.json(rows);
};
