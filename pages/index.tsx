"use client";

import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import Superhero from "../components/Superhero";

interface Hero {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
  };
  image: {
    url: string;
  };
}

export default function Home() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const ACCESS_TOKEN = "SEU_ACCESS_TOKEN_AQUI"; // Substitua pelo seu Access Token
  const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}/`;

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const ids = [200, 465]; // IDs fixos dos heróis
        const promises = ids.map((id) =>
          fetch(`${BASE_URL}${id}`).then((res) => res.json())
        );
        const results: Hero[] = await Promise.all(promises);
        setHeroes(results);
      } catch (error) {
        console.error("Erro ao buscar os heróis:", error);
      }
    };

    fetchHeroes();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.heroGrid}>
        {heroes.map((hero) => (
          <Superhero key={hero.id} hero={hero} />
        ))}
      </div>
    </main>
  );
}
