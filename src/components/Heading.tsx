import FramerWrapper from './animation/FramerWrapper';

import { cn } from '@/utils';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  gradient?: boolean;
  animation?: {
    x?: number;
    y?: number;
    delay?: number;
    duration?: number;
  };
}

const Heading = ({
  children,
  className,
  underline = true,
  gradient = false,
  animation = { x: -100, y: 0 },
}: HeadingProps) => {
  return (
    <FramerWrapper
      y={animation.y}
      x={animation.x}
      delay={animation.delay}
      duration={animation.duration}
    >
      <h1
        className={cn(
          'font-poppins text-primary font-bold text-4xl max-sm:text-2xl transition-all duration-300',
          underline && 'name_underline',
          gradient &&
            'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 animate-gradient-x',
          className,
        )}
      >
        {children}
      </h1>
    </FramerWrapper>
  );
};

export default Heading;
