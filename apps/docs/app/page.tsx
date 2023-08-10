import { Button, Header } from "ui";

export default function Page() {
  const theme = { color: 'blue' }
  return (
    <>
      <Header text="Rebind" />
      <Button theme={theme}/>
    </>
  );
}
