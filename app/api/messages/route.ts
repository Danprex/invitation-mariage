import { NextResponse } from "next/server";
import { google } from "googleapis";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json({ error: "Variables manquantes" }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/"/g, "").replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: "Messages!A:C",
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return NextResponse.json({ messages: [] }, { status: 200 });
    }

    const messages = rows.slice(1).map((row) => ({
      nom: row[0] || "Anonyme",
      message: row[1] || "",
      date: row[2] || "",
    })).filter(m => m.message !== "");

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}