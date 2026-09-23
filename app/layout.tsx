import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pedri González | Football Portfolio & Fan Tribute",
  description:
    "A modern fan website dedicated to Pedri González — the Spanish midfield maestro of FC Barcelona and UEFA Euro 2024 Champion.",
  keywords: [
    "Pedri",
    "Pedri González",
    "FC Barcelona",
    "Spain National Team",
    "Euro 2024",
    "Golden Boy",
    "Midfielder",
    "No 8",
  ],
  authors: [{ name: "Pedri Fan Project" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="barca"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('pedri-website-theme');
                if (storedTheme === 'barca' || storedTheme === 'minimal') {
                  document.documentElement.dataset.theme = storedTheme;
                } else {
                  document.documentElement.dataset.theme = 'barca';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
