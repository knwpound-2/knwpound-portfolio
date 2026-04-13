import { Banner } from "@/components/section/Banner";
import { Capstone } from "@/components/section/Capstone";
import { Footer } from "@/components/navbar/Footer";
import { UxClass } from "@/components/section/UxClass";
import { Works } from "@/components/section/Works";
import FigmaEmbedSection from "@/components/section/FigmaEmbedSection";
import { chatWebsiteDescription, cpWebsiteDescription, fitnessAppDescription, ppyWebsiteDescription, sdsDescription } from "@/lib/works";
import { DEV_PROJECTS, DEV_SKILLS_DATA } from "@/lib/dev";
import LinkEmbedSection from "@/components/section/FigmaEmbedSection";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Banner dev={true}/>
      </section>
      <section id="lately">
        <Capstone skills={DEV_SKILLS_DATA}/>
        {/* <UxClass /> */}
      </section>

      <section id="work">
        <LinkEmbedSection
          title="CP Website Redesign"
          figmaLink="https://embed.figma.com/proto/omfIdKjQSJmBEcNpgwRctD/Wireframe?page-id=&node-id=49-71&m=dev&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=49%3A71&embed-host=share"
          description={cpWebsiteDescription}
        />
        <LinkEmbedSection
          title="Real-Time Chat Application"
          figmaLink="https://www.youtube.com/embed/Hhcnxjao8YQ?si=5owSAAEpTN195wAw"
          description={chatWebsiteDescription}
          isReversed={true}
        />
        <LinkEmbedSection
          title="File Converter System"
          images={["/pics/sds/main.png","/pics/sds/setup.png"]}
          description={sdsDescription}
        />
        </section>
      <section>
        <Works projects={DEV_PROJECTS}/>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
