import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <div id="modal-root" className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"></div>
      </body>
    </html>
  );
}
