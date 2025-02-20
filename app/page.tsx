import Hero from "./hero/page";
import TechStack from "./techstack/page";
import WorkSection from "./Keypoints/page";
import Projects from "./project/page";
import WorkExperience from "./Experience/page";
import AboutMe from "./about/page";
import ContactMe from "./contact/page";
import BookCall from "./Bookacall/page";
export default function Home() {
  return (
   <div>
    <Hero/>
    <WorkSection/>
    <Projects/>
    <WorkExperience/>
    <AboutMe/>
    <TechStack/>
    <ContactMe/>
    <BookCall/>
   
    

   </div>
  );
}
