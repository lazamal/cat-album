export const CatConcept = function ({ title, description }) {
  return (
    <section>
      <h3 className="text-fuchsia-400 mb-2 mt-2 text-3xl">{title}</h3>
      <ul>
        {description.map((descriptionItem, index) => (
          <li key={index} className="text-2xl">
            {descriptionItem}
          </li>
        ))}
      </ul>
    </section>
  );
};
