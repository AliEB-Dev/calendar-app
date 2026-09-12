interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
}

function AboutSection({ title, children }: AboutSectionProps) {
  return (
    <section className="mt-8 px-2 text-gray-800 dark:text-(--color-text-bgdark)">
      <h2 className="mb-2 text-base font-bold ">
        {title}
      </h2>

      <div className="text-sm leading-7 text-gray-600 dark:text-(--color-text-bgdark)">
        {children}
      </div>
    </section>
  );
}

export default AboutSection;