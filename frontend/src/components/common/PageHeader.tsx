type Props = {
  title: string;
  subtitle: string;
};

function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="mt-2 text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}

export default PageHeader;