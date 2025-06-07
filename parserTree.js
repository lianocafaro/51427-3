import antlr4 from "antlr4";
import SubCLexer from "./parser/SubCLexer.js";
import SubCParser from "./parser/SubCParser.js";
import SubCVisitor from "./parser/SubCVisitor.js";

export function parseAndPrintTree(input, errorListener) {
  const chars = new antlr4.InputStream(input);
  const lexer = new SubCLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);

  const parser = new SubCParser(tokens);
  parser.buildParseTrees = true;

  // Reemplazar error listeners por el personalizado
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const tree = parser.programa();

  console.log("\n=== Árbol sintáctico indentado ===");
  printTree(tree, parser);

  // Opcional: Visitor
  const visitor = new class extends SubCVisitor {
    visitSalida(ctx) {
      console.log("\nEncontré printf:", ctx.CADENA().getText());
      return this.visitChildren(ctx);
    }
  }();
  visitor.visit(tree);
}

function printTree(node, parser, indent = "") {
  const ruleName = parser.ruleNames[node.ruleIndex] || "TOKEN";
  console.log(indent + ruleName + ": " + node.getText().replace(/\r?\n/g, "\\n"));
  for (let i = 0; i < node.getChildCount(); i++) {
    const child = node.getChild(i);
    if (child.constructor.name === "TerminalNodeImpl") {
      console.log(indent + "  TOKEN: " + child.getText());
    } else {
      printTree(child, parser, indent + "  ");
    }
  }
} 