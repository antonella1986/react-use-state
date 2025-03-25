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
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div>
      <div>
        {languages.map((lang) => (
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
