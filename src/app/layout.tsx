import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bilge Beauty — Lüks Güzellik & Cilt Bakımı",
  description:
    "İzmir'in en prestijli güzellik merkezi. Lazer epilasyon, Hydrafacial, cilt yenileme, bölgesel incelme ve daha fazlası. Profesyonel cilt bakımı için randevu alın.",
  keywords:
    "güzellik salonu, lazer epilasyon, hydrafacial, cilt yenileme, cilt gençleştirme, bölgesel incelme, Bilge Beauty, İzmir güzellik merkezi",
  openGraph: {
    title: "Bilge Beauty — Lüks Güzellik & Cilt Bakımı",
    description: "İzmir'in en prestijli güzellik merkezi. Profesyonel cilt bakımı için randevu alın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
