import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FaroNutri - Ilumina tu camino hacia la nutrición",
  description: "Nutricionista deportivo certificado especializado en nutrición clínica, deportiva y entrenamiento personal. Planes de alimentación personalizados presenciales y online.",
  keywords: "nutrición deportiva, nutricionista certificado, entrenador personal, antropometría ISAK, farmacología deportiva, consulta nutricional, alimentación saludable",
  authors: [{ name: "FaroNutri" }],
  openGraph: {
    title: "FaroNutri - Ilumina tu camino hacia la nutrición",
    description: "Nutricionista deportivo certificado con enfoque integral en salud y rendimiento",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}