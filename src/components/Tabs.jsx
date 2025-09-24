export default function Tabs({ buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;

  return (
    <ButtonsContainer className="flex justify-center gap-8">
      {buttons}
    </ButtonsContainer>
  );
}
