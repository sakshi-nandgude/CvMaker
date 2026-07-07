interface Props {
  summary: string;
}

function ResumeSummary({ summary }: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-2 border-b pb-1 text-xl font-bold uppercase">
        Professional Summary
      </h2>

      <p className="leading-7 text-gray-700">
        {summary}
      </p>
    </section>
  );
}

export default ResumeSummary;