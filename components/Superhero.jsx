import styles from "../styles/superhero.module.css";

export default function Superhero({ hero }) {
  const intelligence = hero.powerstats?.intelligence || 100;
  const strength = hero.powerstats?.strength || 100;

  return (
    <article className={styles.card}>
      <img
        src={hero.image?.url || "/placeholder.png"}
        alt={hero.name || "Hero"}
        className={styles.image}
      />
      <h1 className={styles.title}>{hero.name || "Unknown Hero"}</h1>
      <p className={styles.stat}>
        Intelligence:{" "}
        <span
          style={{
            width: `${intelligence}%`,
            backgroundColor: "#F9B32F",
            display: "block",
            height: "10px",
            borderRadius: "5px",
          }}
        ></span>
      </p>
      <p className={styles.stat}>
        Strength:{" "}
        <span
          style={{
            width: `${strength}%`,
            backgroundColor: "#FF7C6C",
            display: "block",
            height: "10px",
            borderRadius: "5px",
          }}
        ></span>
      </p>
    </article>
  );
}

