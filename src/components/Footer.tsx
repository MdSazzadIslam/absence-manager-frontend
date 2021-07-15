import "./Footer.css";
interface Props {}
const Footer: React.FC<Props> = (props) => {
  return (
    <div className="footer">
      <h6>Copyright &copy; {new Date().getFullYear()} Crewmeister</h6>
    </div>
  );
};

export default Footer;
