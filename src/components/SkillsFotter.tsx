import { IconType } from 'react-icons';

interface SkillsFooterProps {
  items: {
    alt: string;
    icon: IconType;
    color: string;
  }[];
}

const SkillsFooter = ({ items }: SkillsFooterProps) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 place-items-center">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.alt} className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="p-4 rounded-xl bg-background border-2 border-border hover:border-primary transition-all duration-300 hover:scale-110">
              <Icon
                className="w-12 h-12 transition-all duration-300"
                style={{ color: item.color }}
              />
            </div>
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              {item.alt}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsFooter;
