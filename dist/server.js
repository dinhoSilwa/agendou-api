"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const PORT = process.env.PORT || 3001;
index_1.app.listen(PORT, () => {
    console.log(`Servidor Rodando na Porta : ${PORT}`);
});
//# sourceMappingURL=server.js.map