import './globals.css';
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
