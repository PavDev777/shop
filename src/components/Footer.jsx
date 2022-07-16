const Footer = () => {
  return (
    <footer className="page-footer #9575cd deep-purple lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()}
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
