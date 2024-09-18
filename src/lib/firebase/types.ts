export type GetOptions = {
  source?: "default" | "server" | "cache";
};

export type OnceOptions = {
  getOptions?: GetOptions;
};
