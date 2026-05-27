import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { nom, presence, message } = await req.json();

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Sécurité TypeScript : On vérifie que toutes les clés sont bien là
    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.error("Variables d'environnement manquantes dans l'API RSVP");
      return NextResponse.json(
        { error: "Variables d'environnement manquantes" },
        { status: 500 }
      );
    }

    // Connexion sécurisée à l'API Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const dateActuelle = new Date().toLocaleString("fr-FR");

    // Ajouter la ligne dans l'onglet 'Invités'
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "Invités!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[nom, presence ? "Confirmé" : "Décliné", dateActuelle]],
      },
    });

    // Si l'invité a laissé un message, l'ajouter dans l'onglet 'Messages'
    if (message && message.trim() !== "") {
      await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: "Messages!A:C",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[nom, message, dateActuelle]],
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Erreur lors de l'enregistrement RSVP :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement", details: error?.message || error },
      { status: 500 }
    );
  }
}