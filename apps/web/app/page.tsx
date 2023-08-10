import { Button, Header } from "ui";

export default function Page() {
  const theme = { color: 'green' }
  return (
    <>
      <Header text="Biobank" />
      <Button theme={theme}/>
    </>
  );
}
