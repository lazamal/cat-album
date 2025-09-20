export const TabButton = ({ children, handleClick }) => {
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};
