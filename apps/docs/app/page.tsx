import { Button, Header } from "ui";
import theme from '../theme'

export default function Page() {
  return (
    <>
      <Header text="Rebind" />
      <Button theme={theme.button}/>
    </>
  );
}
