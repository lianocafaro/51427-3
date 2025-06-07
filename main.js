import fs from "fs";
import { printTokens } from "./lexer.js";
import { parseAndPrintTree } from "./parserTree.js";
import { MyErrorListener } from "./errorListener.js";

const fileName = "input.txt";

fs.readFile(fileName, "utf8", (err, input) => {
  if (err) {
    console.error(`Error leyendo el archivo ${fileName}:`, err);
    return;
  }

  console.log(`Contenido de ${fileName}:\n${input}\n`);

  printTokens(input);

  const errorListener = new MyErrorListener();
  parseAndPrintTree(input, errorListener);

  console.log("\n¡Análisis finalizado!");
}); 