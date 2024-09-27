interface Banner {
  title: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

interface LoginingBanner extends Banner {
  onLogin: () => void;
  user?: string;
}

function Banner({ title, className, children, ...props }: Banner) {
  return <div {...props}></div>;
}

function LoginBanner({
  title,
  className,
  onLogin,
  user,
  children,
  ...props
}: LoginingBanner) {
  return (
    <Banner title={title} className={className} onClick={onLogin}>
      {children}
    </Banner>
  );
}
