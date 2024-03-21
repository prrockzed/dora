import DoraState from "@/src/Context";
import DoraHead from "@/src/layout/DoraHead";
import "@/styles/globals.css";
import { DataContext, DataProvider } from "./api/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <DoraState>
        <DoraHead />
        <Component {...pageProps} />
      </DoraState>
    </DataProvider>
  );
}
