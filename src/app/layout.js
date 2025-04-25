export const metadata = { title: 'Cat Cleaner', description: 'Smart litter box website' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
