export default defineI18nConfig(() => ({
  pluralRules: {
    ru: (choice: number) => {
      const teen = choice > 10 && choice < 20;
      const mod = choice % 10;
      if (!teen && mod === 1) return 0;
      if (!teen && mod >= 2 && mod <= 4) return 1;
      return 2;
    }
  }
}));
