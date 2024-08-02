type StyleProps = {
  width?: string;
  height?: string;
};

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, 'as'>;

type AsElementProps = AsProps & ElementProps;

export type FullScreenProps = AsElementProps & StyleProps;
