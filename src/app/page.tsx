import { ArrowRight , Copy } from "lucide-react"
import { Button } from "../components/Button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";

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

      <div>
        <Input type="email" placeholder="Digite seu e-mail"/>
      </div>
    </main>
  );
}
