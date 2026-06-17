export const useCategoriaEmoji = () => {
  const mapaEmojis: Record<string, string> = {
    Paes: "🍞",
    Salgados: "🥐",
    Doces: "🍰",
    Bebidas: "☕",
  };

  const obterEmoji = (categoria: string): string => {
    return mapaEmojis[categoria] || "🛍️";
  };

  return { obterEmoji };
};
