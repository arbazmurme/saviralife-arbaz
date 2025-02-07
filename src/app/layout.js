import ReduxProviderLayout from "@/components/layouts/ReduxProviderLayout";
import "./globals.css";
import Hadear from "@/components/common/Hadear";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Sayva - Fresh & Fast Food Delivery",
  description: "Sayva delivers fresh and delicious meals to your doorstep. Order now for fast, contactless delivery and enjoy a variety of cuisines!",
  keywords: "food delivery, online food ordering, Sayva delivery, fresh meals, contactless delivery, fast food, restaurant delivery",
  authors: [{ name: "Sayva Team", url: "https://sayva.com" }],
  metadataBase: new URL("https://sayva.com"),
  openGraph: {
    title: "Sayva - Fast & Fresh Food Delivery",
    description: "Get fresh and delicious meals delivered to your doorstep with Sayva. Enjoy a wide variety of cuisines at your convenience.",
    url: "https://sayva.com",
    siteName: "Sayva",
    images: [
      {
        url: "https://sayva.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sayva Food Delivery",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SayvaFood",
    title: "Sayva - Fast & Fresh Food Delivery",
    description: "Order from Sayva and get delicious meals delivered fast to your doorstep.",
    images: ["https://sayva.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sayva.com",
  },
  robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProviderLayout>
          <Hadear />
          {children}
          <Footer />
        </ReduxProviderLayout>
      </body>
    </html>
  );
}
