import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CursorLightComponent from "../components/cursor-light";
import DataBlockExpComponent from "@/components/data-block-exp";
import DataBlockProjectComponent from "@/components/data-block-projects";
import amImage from "../assets/am-ev.jpeg";
import baptImage from "../assets/bapt-ev.jpeg";
import antoineImage from "../assets/antoine-ev.png";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navigation = () => {
  // L'état pour stocker l'ID de la section actuellement active
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Définissez les IDs de vos sections ici
      const sections = ["#about", "#experiences", "#projects"];
      let currentSection = "";

      sections.forEach((section) => {
        console.log(section);
        const sectionElement = document.querySelector(section);

        if (sectionElement instanceof HTMLElement) {
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          if (
            sectionElement.offsetTop <= scrollPosition &&
            sectionElement.offsetTop + sectionElement.offsetHeight >
              scrollPosition
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {[
          ["#about", "A propos"],
          ["#experiences", "Experiences"],
          ["#projects", "Projets personnel"],
        ].map(([id, name]) => (
          <li key={id}>
            <a
              className={`group flex items-center py-3 ${
                activeSection === id ? "active" : ""
              }`}
              href={id}
            >
              <span
                className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none ${
                  activeSection === id ? "lg:w-16 lg:bg-slate-200" : ""
                }`}
              ></span>
              <span
                className={`text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 ${
                  activeSection === id ? "lg:text-slate-200" : ""
                }`}
              >
                {name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Home() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col">
        <CursorLightComponent />
        <div className="mx-auto lg:w-3/5 w-3/4 lg:flex lg:gap-10">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20 pt-20 px-4">
            <div>
              <h1 className="text-white font-semibold tracking-wider text-4xl hover:text-emerald-200">
                <Link href="/">Antoine Dubois</Link>
              </h1>
              <h2 className="text-white text-lg mt-3">
                Developeur Junior FullStack
              </h2>
              <p className="text-gray-400 mt-5 text-sm">
                Je développe des applications web responsives et accessibles
                depuis maintenant + de 4 ans.
              </p>
              <Navigation />
            </div>
            <ul className="flex gap-6 text-xl items-end mt-4">
              <li>
                <a target="_blank" href="https://twitter.com/Intelltoine">
                  <FontAwesomeIcon icon={faXTwitter} color="white" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/Intelltoine">
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/antoine-dubois-30198a134/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/antoine__dubs/"
                >
                  <FontAwesomeIcon icon={faInstagram} color="white" />
                </a>
              </li>
            </ul>
          </header>

          <main className="flex flex-col lg:w-1/2 py-20">
            <div>
              <section id="about" className="px-4 scroll-mt-60">
                <h3 className="text-white mb-7 uppercase text-sm lg:hidden">
                  A propos
                </h3>
                <p className="text-gray-400 mb-4">
                  J&apos;ai obtenu mon Master MIAGE (Master en Méthodes
                  Informatiques Appliquées à la Gestion des Entreprises) en
                  2020, après deux ans d&apos;alternance au sein de
                  l&apos;entreprise{" "}
                  <a
                    target="_blank"
                    className="text-red-500"
                    href="https://www.cgi.com/france/fr-fr"
                  >
                    CGI
                  </a>
                  , où j&apos;ai pu apprendre le développement web aux côtés
                  d&apos;experts techniques et de développeurs séniors.
                </p>
                <p className="text-gray-400 mb-4">
                  Après avoir travaillé pendant deux ans en tant
                  qu&apos;Analyste Développeur, j&apos;ai souhaité découvrir
                  d&apos;autres horizons en rejoignant{" "}
                  <a
                    target="_blank"
                    className="text-blue-500"
                    href="https://www.apside.com/fr/"
                  >
                    Apside
                  </a>
                  . Cela m&apos;a permis d&apos;arriver sur ma mission actuelle,
                  où je participe au développement de la refonte d&apos;une
                  application dans le secteur médical.
                </p>
                <p className="text-gray-400 mb-4">
                  Je m&apos;efforce constamment d&apos;enrichir mes compétences
                  en explorant de nouvelles technologies et concepts pendant mon
                  temps libre, tout en me poussant hors de ma zone de confort.
                  Par ailleurs, je maintiens un équilibre sain entre ma vie
                  professionnelle et personnelle en pratiquant régulièrement du
                  sport et en savourant les moments passés avec mes amis et ma
                  famille.
                </p>
                <p className="text-gray-400">
                  N&apos;hésite pas à me contacter via mes réseaux sociaux !
                </p>
              </section>
              <section id="experiences" className="mt-20 scroll-mt-20">
                <h3 className="text-white mb-7 uppercase text-sm px-4">
                  Experiences
                </h3>
                <div className="flex flex-col gap-16">
                  <DataBlockExpComponent
                    titre={"Développeur FullStack Java/Angular - Apside"}
                    date={"2022 - 2024"}
                    description={
                      "Refonte d'une application web en Java/Angular dans le milieu médicale historiquement en GWT avec migration Oracle vers PostgreSQL. Méthode de travail agile dans une équipe d'environ 15 développeurs avec reproduction de maquettes sous Figma."
                    }
                    tableau={[
                      "Java 8",
                      "Angular 16",
                      "NGRX",
                      "Jest",
                      "JUnit",
                      "TypeScript",
                      "PostgreSQL",
                    ]}
                    companyUrl={"https://www.apside.com/fr/"}
                  />
                  <DataBlockExpComponent
                    titre={
                      "Analyste / Développeur FullStack Java/Angular - CGI"
                    }
                    date={"2019 - 2022"}
                    description={
                      "Tierce maintenance multi-applicative et builds d'applications du gouvernement français au sein d'une équipe de 8 analystes/développeurs en méthode agile. Rédaction de devis et réunions clients réguliers."
                    }
                    tableau={[
                      "Java 8/11",
                      "Spring Boot",
                      "Angular 11",
                      "TypeScript",
                      "PostgreSQL",
                      "Git",
                    ]}
                    companyUrl={"https://www.cgi.com/france/fr-fr"}
                  />
                </div>
              </section>
            </div>
            <div>
              <section id="projects" className="mt-20 scroll-mt-20">
                <h3 className="text-white mb-7 uppercase text-sm px-4">
                  Projets personnel
                </h3>
                <div className="flex flex-col gap-16">
                  <DataBlockProjectComponent
                    titre={"Portfolio - Antoine Dubois"}
                    imageUrl={antoineImage.src}
                    description={
                      "Portfolio présentant le profil d'un développeur web"
                    }
                    tableau={["NextJS", "TailwindCSS", "Hostinger"]}
                    companyUrl={"https://antoine-dubois.dev/"}
                  />
                  <DataBlockProjectComponent
                    titre={
                      "Baptiste Maison Vidéaste - Photographe Professionnel"
                    }
                    imageUrl={baptImage.src}
                    description={
                      "Application web présentant les services d'un photographe professionnel pour tout types d'évenements dans les Hauts de France avec formulaire de contact et gestion d'envois de mails"
                    }
                    tableau={[
                      "Angular 17",
                      "TailwindCSS",
                      "Firebase",
                      "Cloudflare R2",
                      "Hostinger",
                    ]}
                    companyUrl={"https://baptistemaisonvideaste.fr/#/"}
                  />
                  <DataBlockProjectComponent
                    titre={"AM Evenements - DJ Professionnel"}
                    imageUrl={amImage.src}
                    description={
                      "Application web présentant les services d'un DJ pour tout types d'évenements dans les Hauts de France avec formulaire de contact et gestion d'envois de mails"
                    }
                    tableau={[
                      "JavaScript",
                      "SendGrid",
                      "Netlify",
                      "Serverless Functions",
                      "Webflow",
                    ]}
                    companyUrl={"https://am-evenements.fr/"}
                  />
                </div>
              </section>
            </div>
            <footer className="text-gray-500 pt-20 text-sm px-4">
              <p>
                Inspiré de{" "}
                <a
                  target="_blank"
                  className="text-emerald-200"
                  href="https://brittanychiang.com/"
                >
                  Brittany Chiang
                </a>{" "}
                et entièrement codé sous&nbsp;
                <a
                  target="_blank"
                  className="text-emerald-200"
                  href="https://code.visualstudio.com/"
                >
                  Visual Studio Code
                </a>{" "}
                par Antoine Dubois.
              </p>
              Développé en{" "}
              <a
                target="_blank"
                className="text-emerald-200"
                href="https://nextjs.org/"
              >
                Next.js
              </a>{" "}
              et&nbsp;
              <a
                target="_blank"
                className="text-emerald-200"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>
              . Déployé avec&nbsp;
              <a
                target="_blank"
                className="text-emerald-200"
                href="https://www.hostinger.fr/"
              >
                Hostinger
              </a>
              .
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
