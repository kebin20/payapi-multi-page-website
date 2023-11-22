"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import Auth from "./auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KindeProvider>
      <html lang="en">
        <body>
          <Auth>{children}</Auth>
        </body>
      </html>
    </KindeProvider>
  );
}
