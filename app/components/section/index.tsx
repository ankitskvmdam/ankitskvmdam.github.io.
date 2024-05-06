import styles from "./style.module.scss";

export type TSectionProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function Section(props: TSectionProps) {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
}

export type TSectionWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function SectionWrapper(props: TSectionWrapperProps) {
  const { children } = props;
  return <div className={styles.wrapper}>{children}</div>;
}
