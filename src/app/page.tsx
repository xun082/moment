import Image from 'next/image';
import moment from '@public/moment.webp';

import SocialLinks from '@/components/SocialLinks';
import HeroTexts from '@/components/HeroTexts';
import GithubBtn from '@/components/animation/GithubBtn';
import DownLoadResumeBtn from '@/components/DownLoadResumeBtn';
import FramerWrapper from '@/components/animation/FramerWrapper';

export const siteConfig = {
  name: 'Moment',
  description: 'I am a Passionate Software Developer',
};

export default function Home() {
  return (
    <div className="flex w-full min-h-[calc(100vh-80px)] items-center justify-between gap-8">
      {/* 左侧内容 */}
      <div className="w-1/2 pl-20 max-lg:w-full max-lg:pl-8">
        <FramerWrapper className="flex flex-col gap-10" y={0} x={-100}>
          {/* 标题和描述 */}
          <div className="space-y-6">
            <HeroTexts />
          </div>

          {/* 社交链接 */}
          <div className="flex items-center gap-6">
            <SocialLinks />
          </div>

          {/* 下载按钮 */}
          <div className="w-fit">
            <DownLoadResumeBtn />
          </div>
        </FramerWrapper>
      </div>

      {/* 右侧图片区域 */}
      <div className="w-1/2 flex justify-end pr-20 max-lg:hidden">
        <div className="relative w-[600px] h-[400px]">
          <Image
            src={moment}
            alt="logo"
            className="object-cover rounded-3xl shadow-lg"
            fill
            priority
          />
        </div>
      </div>

      {/* Github按钮 */}
      <div className="fixed bottom-8 left-8 z-50">
        <GithubBtn />
      </div>
    </div>
  );
}
