import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Novo Lar",
  description: "Descubra e Compartilhe Novas Receitas!",
  icons: {
    icon: ["/favicon/cara.ico"],
    apple: ["/favicon/apple-touch-icon.png"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
  manifest: "/favicon/site.webmanifest",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
