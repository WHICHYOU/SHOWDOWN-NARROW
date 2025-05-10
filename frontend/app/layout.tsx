import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoister – You Are What You Choose",
  description: "Taste-based identity through rapid preference voting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}

// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster";
// import { ToastProvider } from "@/components/ui/use-toast"; // ✅ Add this

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Yoister – You Are What You Choose",
//   description: "Taste-based identity through rapid preference voting.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ToastProvider>
//           {" "}
//           {/* ✅ Now wraps children + Toaster */}
//           {children}
//           <Toaster />
//         </ToastProvider>
//       </body>
//     </html>
//   );
// }
