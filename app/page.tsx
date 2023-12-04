import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/Navigation/index";
import { Box, Button } from "@/node_modules/@mui/material/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Image
        src="/standing.png"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={450}
        height={450}
      />
    </main>
  );
}
