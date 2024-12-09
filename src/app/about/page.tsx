import { Circle, Heart, User2 } from 'lucide-react';

import Aboutfooter from '@/components/Aboutfooter';
import FramerWrapper from '@/components/animation/FramerWrapper';
import Heading from '@/components/Heading';
import { Badge } from '@/components/ui/badge';

const HOBBY_ITEMS = [
  { hobby: 'Basketball Player', color: 'bg-blue-500/5' },
  { hobby: 'Home Chef', color: 'bg-orange-500/5' },
  { hobby: 'History Explorer', color: 'bg-yellow-500/5' },
  { hobby: 'Mountain Climber', color: 'bg-green-500/5' },
  { hobby: 'Photography Lover', color: 'bg-purple-500/5' },
  { hobby: 'Tech Blogger', color: 'bg-pink-500/5' },
  { hobby: 'Open Source Creator', color: 'bg-indigo-500/5' },
] as const;

// 使用箭头函数并添加类型
const AboutPage: React.FC = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2 px-4 py-2 bg-[#0f172a] text-white">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In China.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-lg w-full text-primary/80 max-sm:text-base leading-relaxed">
            I am a Full Stack Web Developer from Zhaoqing, Guangdong, China, passionate about
            turning interesting ideas into real projects and actively contributing to the
            open-source community. Currently, I have two open-source projects with over 500 stars.
            My expertise lies in front-end engineering, and I often use Node.js to write scripts and
            tools that address daily development needs. Additionally, I have delved into the React
            source code, which has given me a deep understanding of its core principles.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col"
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>

      <FramerWrapper className="block w-full" y={100} delay={0.31}>
        <h2 className="flex items-center gap-2 text-2xl font-poppins text-primary/90 font-semibold mb-8">
          <Heart className="h-6 w-6" strokeWidth={2.5} />
          Hobbies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {HOBBY_ITEMS.map(({ hobby, color }) => (
            <div
              key={hobby}
              className={`group flex items-center gap-3 rounded-xl p-4 ${color} hover:bg-opacity-20 transition-all duration-300`}
            >
              <div className="flex items-center gap-2">
                <Circle className="h-2 w-2 flex-shrink-0 text-primary/70" fill="currentColor" />
                <span className="text-base text-primary/80 group-hover:text-primary/100 transition-colors">
                  {hobby}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default AboutPage; // 更改组件名称为 PascalCase
