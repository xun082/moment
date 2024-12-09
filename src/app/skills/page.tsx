'use client';

import { Lightbulb } from 'lucide-react';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiMysql,
  SiDocker,
  SiTurborepo,
  SiVercel,
  SiPrettier,
  SiWebpack,
  SiRollupdotjs,
  SiMarkdown,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';

import { Badge } from '@/components/ui/badge';
import Heading from '@/components/Heading';
import FramerWrapper from '@/components/animation/FramerWrapper';

const skillPage = () => {
  const skills = [
    { alt: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { alt: 'React', icon: SiReact, color: '#61DAFB' },
    { alt: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { alt: 'Node.js', icon: SiNodedotjs, color: '#83CD29' },
    { alt: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { alt: 'Prisma', icon: SiPrisma, color: '#5A67D8' },
    { alt: 'MySQL', icon: SiMysql, color: '#00758F' },
    { alt: 'Redis', icon: DiRedis, color: '#DC382D' },
    { alt: 'Docker', icon: SiDocker, color: '#2496ED' },
    { alt: 'Turborepo', icon: SiTurborepo, color: '#EF4444' },
    { alt: 'Vercel', icon: SiVercel, color: '#000000' },
    { alt: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
    { alt: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { alt: 'Rollup', icon: SiRollupdotjs, color: '#FF3333' },
    { alt: 'Markdown', icon: SiMarkdown, color: '#755838' },
    { alt: 'TailwindCSS', icon: SiTailwindcss, color: '#38B2AC' },
    { alt: 'GitHub', icon: SiGithub, color: '#6e7681' },
  ];

  const skillHighlights = [
    {
      category: 'Frontend Development',
      points: [
        '深入理解 React 核心原理，阅读过 React 源码，熟悉 Fiber 架构、调度机制和 Hooks 实现原理',
        '精通 TypeScript，具备类型系统设计经验，能够构建类型安全的企业级应用',
        '熟练掌握前端性能优化技术，包括代码分割、懒加载、资源预加载、缓存策略等',
        '具备组件库开发经验，深入理解组件设计模式和最佳实践',
      ],
    },
    {
      category: 'Backend Development',
      points: [
        '熟练使用 Node.js 和 NestJS 构建可扩展的微服务架构',
        '深入理解数据库设计原则，具备 MySQL 性能优化和数据建模经验',
        '掌握 Redis 缓存策略和分布式锁的实现原理',
        '具备 Docker 容器化部署经验，熟悉 CI/CD 流程',
      ],
    },
    {
      category: 'Engineering Practices',
      points: [
        '具备前端工程化经验，熟练使用 Webpack、Rollup 等构建工具',
        '实践过 Monorepo 项目管理，使用 Turborepo 优化开发工作流',
        '注重代码质量，遵循 Clean Code 原则，善于编写可维护的代码',
        '具备技术方案设计能力，能够平衡技术债务和业务需求',
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 pt-20 px-4 max-w-7xl mx-auto">
      <div className="mb-4">
        <Badge className="gap-2 px-4 py-2 text-base">
          <Lightbulb className="h-5 w-5" />
          Technical Stack
        </Badge>
      </div>

      <div className="flex flex-col gap-12">
        <div className="space-y-8">
          <Heading className="text-4xl md:text-5xl">Full Stack Development Journey.</Heading>

          <FramerWrapper y={0} x={200}>
            <p className="text-lg md:text-xl leading-relaxed text-primary/90 max-w-4xl">
              I am a passionate full-stack developer with deep expertise in modern web technologies
              and a strong focus on front-end engineering. My core stack includes TypeScript, React,
              and Node.js, with Next.js as my primary framework. I build scalable applications using
              NestJS for the backend, Prisma for database management, and Docker for
              containerization. I have a strong understanding of front-end build systems and
              engineering best practices, leveraging tools like Webpack, Turborepo, and Prettier to
              ensure efficient workflows, clean code, and maintainable projects. I'm dedicated to
              delivering high-quality, well-architected applications while optimizing the
              development process at every stage.
            </p>
          </FramerWrapper>
        </div>

        <FramerWrapper y={100} delay={0.5} className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text_underline">
            Technologies & Tools
          </h2>

          <div className="w-full p-8 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((item) => (
                <div
                  key={item.alt}
                  className="group flex flex-col items-center p-4 rounded-xl bg-white/5 
                  border border-white/10 hover:border-[var(--hover-color)] hover:bg-white/10 
                  transition-all duration-300 hover:scale-105"
                  style={{ '--hover-color': `${item.color}40` } as any}
                >
                  <item.icon
                    className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                  <span className="text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.4} className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text_underline">
            Technical Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillHighlights.map((category) => (
              <div
                key={category.category}
                className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                <ul className="space-y-3">
                  {category.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-primary/80">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
