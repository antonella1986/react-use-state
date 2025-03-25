import { useState } from "react";
import { Card } from './components/Card';
import { CardContent } from './components/CardContent';
import { Button } from "./components/Button";

const languages = [
  { name: "HTML", description: "Linguaggio di markup per strutturare le pagine web." },
  { name: "CSS", description: "Utilizzato per definire lo stile e il layout delle pagine web." },
  { name: "JavaScript", description: "Linguaggio di scripting per rendere le pagine web interattive." },
  { name: "Node.js", description: "Linguaggio di scripting per rendere le pagine web interattive." },
  { name: "Express", description: "Framework per Node.js per creare applicazioni web." },
  { name: "ReactJS", description: "Framework per creare applicazioni web interattive." }
];

export default function App() {
  //useState(languages[0]) > inizializzo la variabile con il primo linguaggio dell'array
  //selectedLanguage > variabile che tiene traccia del linguaggio selezionato
  //setSelectedLanguage > funzione per aggiornare selectedLanguage
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div>
      <div>

        {languages.map((lang) => (
          //key={lang.name} > identificatore unico per ogni elemento generato dinamicamente
          //onClick={() => setSelectedLanguage(lang)} > quando si clicca sul pulsante, aggiorniamo selectedLanguage con il linguaggio corrispondente
          <Button key={lang.name} onClick={() => setSelectedLanguage(lang)}>
            {lang.name}
          </Button>
        ))}
      </div>
      <Card>
        <CardContent>
          <h2>{selectedLanguage.name}</h2>
          <p>{selectedLanguage.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
