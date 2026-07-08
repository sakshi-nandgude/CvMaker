interface Props {
  resume: any;
}

function ResumePreview({
  resume,
}: Props) {

  if (!resume) {

    return null;

  }

  return (

    <pre
      className="
      mt-10
      rounded-lg
      bg-gray-100
      p-6
      overflow-auto
    "
    >
      {JSON.stringify(
        resume,
        null,
        2
      )}
    </pre>

  );

}

export default ResumePreview;