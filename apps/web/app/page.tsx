import { Button, Header } from "ui";
import theme from '../theme'

export default function Page() {
  return (
    <>
      <Header text="Biobank" />
      <Button theme={theme.button}/>
    </>
  );
}
