import "~/styles/globals.scss";
import MainLayout from "~/layout/MainLayout";
import { ThemesProvider } from "~/context/themesContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemesProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemesProvider>
  );
}
