interface Props {
  number: string;
  title: string;
  description: string;
}

export default function ServiceItem({ number, title, description }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm">{number}</p>

      <h3 className="font-serif text-2xl">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
