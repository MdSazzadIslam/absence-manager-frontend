import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h6>Copyright &copy; {new Date().getFullYear()} Crewmeister</h6>
    </div>
  );
};

export default Footer;
