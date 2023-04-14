import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const contributors = [
  {
    id: 1,
    name: "Ilenia Ingrassia",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/200x200.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "ilenia@gmail.com",
  },
  {
    id: 2,
    name: "Fabio Massi",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/200x200.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "fabio@gmail.com",
  },
  {
    id: 3,
    name: "Adriana Origlio",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/200x200.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "adriana@gmail.com",
  },
  {
    id: 4,
    name: "Alessio Perez",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/200x200.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "alessio@gmail.com",
  },
  {
    id: 5,
    name: "Luisa Zizzo",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/200x200.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "luisa@gmail.com",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <h1>Meet the team</h1>
      <div className={styles.Content}>
        {contributors.map((contributor) => (
          <div className={styles.Contributor} key={contributor.id}>
            <div className={styles.ImageWrapper}>
              <Image
                src={contributor.image}
                width={200}
                height={200}
                alt={contributor.name}
              />
            </div>
            <div className={styles.Info}>
              <h2>{contributor.name}</h2>
              <h3>{contributor.role}</h3>
              <div className={styles.Links}>
              <Link href={contributor.github}>
    <span>Github</span>
  </Link>
  <Link href={contributor.linkedin}>
    <span>LinkedIn</span>
  </Link>
  <Link href={`mailto:${contributor.email}`}>
    <span>Email</span>
  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;