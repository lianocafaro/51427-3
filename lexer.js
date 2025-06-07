import antlr4 from "antlr4";
import SubCLexer from "./parser/SubCLexer.js";

export function printTokens(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new SubCLexer(chars);

  console.log("=== Tabla de Tokens ===");
  lexer.reset();

  let token = lexer.nextToken();
  while (token.type !== antlr4.Token.EOF) {
    let typeName;
    if (lexer.symbolicNames && lexer.symbolicNames[token.type]) {
      typeName = lexer.symbolicNames[token.type];
    } else {
      typeName = `TokenType(${token.type})`;
    }

    console.log(`Token: '${token.text}' - Tipo: ${typeName}`);
    token = lexer.nextToken();
  }
} 