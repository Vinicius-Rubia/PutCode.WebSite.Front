import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Welcome } from "./components/welcome";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <Welcome />
      </div>
    </ThemeProvider>
  )
}
