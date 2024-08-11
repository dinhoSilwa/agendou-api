import { app } from "./index";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor Rodando na Porta : ${PORT}`);
});
