export const CatConcept = function ({ title, description, pic }) {
  return (
    <section className="flex flex-col">
      <h3 className="text-fuchsia-400 mb-15 mt-2 text-3xl">{title}</h3>
      <div className="flex flex-row">
        <ul className="flex flex-col">
          {description.map((descriptionItem, index) => (
            <li key={index} className="text-2xl pt-5">
              {descriptionItem}
            </li>
          ))}
        </ul>
        <img src={pic} className="h-100 w-150 object-contain" />
      </div>
    </section>
  );
};
