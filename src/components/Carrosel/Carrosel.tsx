import img1 from '../../assets/img1.png';
import './Carrosel.css';

function Carrosel() {
  const bgCarrosel = {backgroundImage: `url(${img1})`};
  return (
    <div className="img-carrosel" style={bgCarrosel} />
  );
}

export default Carrosel;