import { ArrowRight , Copy } from "lucide-react"
import { Button } from "../components/Button";
import { IconButton } from "@/components/icon-button";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>
    </main>
  );
}
