import { useLanguage } from "./languages/LanguageProvider";
import Navbar from './companents/NavBar'
import HeroSect from './companents/HeroSect'
import Projects from './companents/Projects'
import About from './companents/About'
import Contact from './companents/Contact'


export default function Portfolio() {
    const { lang, toggleLanguage, t } = useLanguage();

    return (
        <>
            <Navbar />
            <HeroSect />
            <Projects />
            <About />
            <Contact />
        </>
    );
};
