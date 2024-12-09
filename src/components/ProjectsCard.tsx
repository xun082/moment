import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { buttonVariants } from './ui/button';
import FramerWrapper from './animation/FramerWrapper';

import { cn } from '@/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface projectcardprops {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  const getTagStyles = (tag: string) => {
    const styles = {
      Nextjs: 'bg-gradient-to-r from-black to-gray-800 text-white border-black/20',
      Typescript: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-300',
      'Shadcn Ui': 'bg-gradient-to-r from-slate-600 to-slate-700 text-white border-slate-400',
      Zustand: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-300',
      tailwindcss: 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white border-cyan-300',
      yjs: 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-300',
      Webpack: 'bg-gradient-to-r from-blue-400 to-blue-500 text-white border-blue-200',
      Vite: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-300',
      NodeJs: 'bg-gradient-to-r from-green-600 to-green-700 text-white border-green-400',
      Turborepo: 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-300',
      openAi: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-emerald-300',
    };

    return (
      styles[tag as keyof typeof styles] ||
      'bg-gradient-to-r from-gray-500 to-gray-600 text-white border-gray-300'
    );
  };

  return (
    <FramerWrapper
      className="w-full md:w-[32%] min-h-[400px] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col bg-white/90 backdrop-blur-md transition-all duration-500 border-0 rounded-xl overflow-hidden group relative hover:animate-card-hover">
        <div className="absolute inset-[-2px] bg-[length:400%_400%] bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow transition-all duration-300" />

        <div className="absolute inset-[1px] bg-white/90 backdrop-blur-xl rounded-xl z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/90 group-hover:opacity-90 transition-opacity duration-300" />
        </div>

        <div className="flex-1 flex flex-col relative z-10">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
              {value.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col relative">
            <p className="text-base font-poppins text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
              {value.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {value.tags.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg border',
                    getTagStyles(tag),
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </div>

        <CardFooter className="mt-auto pt-4 pb-4 px-6 border-t border-gray-100/50 relative z-10">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'w-full justify-center bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group/button relative overflow-hidden',
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-1">
              Visit Project
              <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
            </span>
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
