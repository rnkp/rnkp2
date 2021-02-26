export interface Content {
  [key: number]: {
    content: () => JSX.Element;
    title: string;
  }
}
