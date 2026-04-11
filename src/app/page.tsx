import { Banner } from "@/components/section/Banner";
import { Capstone } from "@/components/section/Capstone";
import { Footer } from "@/components/navbar/Footer";
import { UxClass } from "@/components/section/UxClass";
import { Works } from "@/components/section/Works";
import FigmaEmbedSection from "@/components/section/FigmaEmbedSection";
import { cpWebsiteDescription, fitnessAppDescription, ppyWebsiteDescription } from "@/lib/works";
import { UX_PROJECTS, UX_SKILLS_DATA } from "@/lib/uxui";
import LinkEmbedSection from "@/components/section/FigmaEmbedSection";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>
      <section id="lately">
        <Capstone skills={UX_SKILLS_DATA}/>
        {/* <UxClass /> */}
      </section>

      <section id="work">
        <LinkEmbedSection
          title="CP Website Redesign"
          figmaLink="https://embed.figma.com/proto/omfIdKjQSJmBEcNpgwRctD/Wireframe?page-id=&node-id=49-71&m=dev&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=49%3A71&embed-host=share"
          description={cpWebsiteDescription}
        />
        <LinkEmbedSection
          title="PPY Website Redesign"
          figmaLink="https://embed.figma.com/proto/Y2eAMZ9AV4BRHSSOB1o0JI/PPY-Website-Design?page-id=219%3A513&node-id=413-4526&viewport=-4855%2C424%2C0.19&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=413%3A4526&embed-host=share"
          description={ppyWebsiteDescription}
          isReversed={true}
        />
        <LinkEmbedSection
          title="Fitness App"
          figmaLink="https://embed.figma.com/proto/LrfaZHiF1lie1aAPwezPzn/Fitness-App?page-id=421%3A3582&node-id=568-7491&p=f&viewport=-6019%2C-1188%2C0.32&scaling=scale-down&content-scaling=responsive&starting-point-node-id=568%3A7491&embed-host=share"
          description={fitnessAppDescription}
        />
        </section>
      <section>
        <Works projects={UX_PROJECTS}/>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
