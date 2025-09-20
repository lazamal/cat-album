export const CatConcept = function ({ title, description }) {
  return (
    <section>
      <h3 className="text-fuchsia-400 mb-2 mt-2">{title}</h3>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

// const urls = files.map((file) => URL.createObjectURL(file));
