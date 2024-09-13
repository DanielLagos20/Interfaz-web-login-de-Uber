export default function ButtonService({
  nameService,
  urlImageService,
  urlAlt,
  url,
}) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 rounded-md py-2 px-5 w-full text-center transition ease-in-out delay-75 hover:bg-gray-300 flex justify-center items-center gap-5"
      >
        <img src={urlImageService} alt={urlAlt} className="w-7" />
        <span>{nameService}</span>
      </a>
    </>
  );
}
