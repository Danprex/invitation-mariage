import { NextResponse } from "next/server";
import { google } from "googleapis";

// Force Next.js à exécuter cette API en mode dynamique (indispensable pour les données en temps réel)
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Sécurité TypeScript : On vérifie que toutes les variables sont bien présentes
    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.error("Variables d'environnement manquantes dans l'API");
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

    // Récupérer les données de l'onglet 'Messages' (de la colonne A à C)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: "Messages!A:C",
    });

    const rows = response.data.values;

    if (!rows || rows.length <= 1) {
      // Si la feuille est vide ou ne contient que les entêtes
      return NextResponse.json([]);
    }

    // Exclure la première ligne (les entêtes Nom, Message, Date)
    const messages = rows.slice(1).map((row) => ({
      nom: row[0] || "Anonyme",
      texte: row[1] || "",
      date: row[2] || "",
    }));

    // Inverser l'ordre pour afficher les messages les plus récents en premier
    return NextResponse.json(messages.reverse());
  } catch (error: any) {
    console.error("Erreur lors de la récupération des messages :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des messages", details: error?.message || error },
      { status: 500 }
    );
  }
}