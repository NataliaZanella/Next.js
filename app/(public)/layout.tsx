export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <h1>Login - Sistema </h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
