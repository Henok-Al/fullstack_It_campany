import Navbar from "../components/navbar/Navbar";
import "./globals.css"
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "../components/footer/Footer"
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "../components/AuthProvider/AuthProvider"
import DashboardNavbar from "./dashboard/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atlas Computer Technology",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
            {/* {isDashboard ? <DashboardNavbar />: <Navbar />  } */}
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}