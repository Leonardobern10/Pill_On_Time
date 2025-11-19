export type ButtonDefaultProps = {
  press: boolean;
  textDefault: string;
  textPressed: string;
  onComplete?: () => void;
  setStatus: (press: boolean) => void;
};
