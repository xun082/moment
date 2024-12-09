import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';

import FramerWrapper from '@/components/animation/FramerWrapper';
import Heading from '@/components/Heading';
import { Badge } from '@/components/ui/badge';

const contactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: '2042204285@qq.com',
      description: 'Send me an email, I typically respond within 24 hours.',
      action: 'mailto:2042204285@qq.com',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-500',
      hoverBg: 'hover:bg-blue-500/15',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'WeChat',
      value: 'yunmz777',
      description: 'Add me on WeChat for quick responses.',
      action: '',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-500',
      hoverBg: 'hover:bg-green-500/15',
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2 px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] transition-colors">
        <Phone className="h-4 w-4" />
        Contact
      </Badge>

      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>

        <FramerWrapper y={0} x={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.action}
                className={`group flex flex-col gap-4 rounded-2xl p-8 bg-white/5 ${method.hoverBg} transition-all duration-300 border border-white/10 backdrop-blur-sm shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${method.bgColor} ${method.textColor} ring-1 ring-white/10 shadow-sm`}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{method.title}</h3>
                      <p className="text-primary/60 font-medium mt-1">{method.value}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary/40 group-hover:text-primary/80 group-hover:translate-x-2 transition-all duration-300" />
                </div>
                <p className="text-primary/70 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default contactPage;
