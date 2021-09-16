function addTogether(a, b) {
  // Se o primeiro argumento não é um número então retorna undefined.
  if (typeof a !== "number") return undefined;

  // Se o primeiro argumento é um número, então verifica se o segundo argumento é um número e retorna a soma.
  if (typeof b === "number") return a + b;

  // Se o primeiro argumento é um número e segundo argumento não é um número, então verifica se o segundo argumento foi definido.
  if (b === undefined) {
    // Se não foi definido, retorna um função que somará com um segundo argumento.
    return function addTogether(b) {
      // Se o segundo argumento é um número então soma os argumentos
      if (typeof b === "number") return a + b;

      // Caso contrário, retorna undefined pois o segundo argumento não é um número.
      return undefined;
    };
  }

  // Caso contrário, retorna undefined pois o segundo argumento foi definido e não é um número.
  return undefined;
}
