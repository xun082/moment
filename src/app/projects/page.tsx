import { Layers } from 'lucide-react';

import FramerWrapper from '@/components/animation/FramerWrapper';
import Heading from '@/components/Heading';
import ProjectCards from '@/components/ProjectsCard';
import { Badge } from '@/components/ui/badge';

const projectsPage = () => {
  const Projects = [
    {
      title: 'Create Neat',
      description: ` Developed a front-end scaffold based on PNPM and Turborepo, aimed at quickly creating various types of projects for users.`,
      tags: ['Webpack', 'Vite', 'NodeJs', 'Typescript', 'Turborepo'],
      link: 'https://github.com/xun082/create-neat',
    },

    {
      title: 'Online Editor',
      description:
        'An online code editor based on Next.js and NestJS, using Monaco Editor and Yjs for real-time collaborative editing and synchronization.',
      tags: ['Nextjs', 'Typescript', 'Shadcn Ui', 'Zustand', 'tailwindcss', 'yjs'],
      link: 'https://github.com/xun082/online-edit-web',
    },
    {
      title: 'Create Ai Toolkit',
      description:
        'An AI-powered development toolkit offering intelligent features like auto-generating commit messages, code reviews, and generating React components from descriptions, helping developers improve efficiency and code quality.',
      tags: ['NodeJs', 'Typescript', 'openAi'],
      link: 'https://github.com/xun082/create-ai-toolkit',
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I am passionate about building meaningful projects with commercial potential. Here,
            you'll find the technical projects I've created, which not only showcase my innovation
            and problem-solving skills but also reflect my exploration of applying technology to
            real-world business scenarios. The goal of these projects is to create commercial value.
            Through developing and optimizing them, I continuously improve my technical expertise
            while learning how to transform creative ideas into practical, viable business
            solutions.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
