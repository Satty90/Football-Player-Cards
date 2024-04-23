import { NextResponse } from "next/server";
import pool from "@/app/api/db";

export const GET = async () => {
  const response = await pool.query("SELECT * FROM managers");
  const { rows } = response;
  return NextResponse.json(rows);
};
