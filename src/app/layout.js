import "./globals.css";

export const metadata = {
  title: "Will you be my Valentine's?",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
