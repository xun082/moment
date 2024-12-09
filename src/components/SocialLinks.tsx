import { Rss } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from './ui/button';
import FramerWrapper from './animation/FramerWrapper';

import { cn } from '@/utils';

const SocialLinks = () => {
  const links = [
    {
      name: 'GitHub',
      link: 'https://github.com/xun082',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      className: 'hover:text-[#333]',
    },
    {
      name: '掘金',
      link: 'https://juejin.cn/user/3782764966460398/posts',
      icon: <Rss />,
      className: 'hover:text-[#EA4335]',
    },
  ];

  return (
    <div className="flex gap-4">
      {links.map((item, index) => {
        const timing = 0.55 + index * 0.125;

        return (
          <FramerWrapper key={index} delay={timing} y={50}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'transition-colors duration-200',
                item.className,
              )}
              title={item.name}
            >
              {item.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </div>
  );
};

export default SocialLinks;
