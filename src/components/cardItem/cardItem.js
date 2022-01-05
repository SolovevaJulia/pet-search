import PetPhoto from "../cardItem/img/photo_2022-01-05_18-00-35.jpg";
import PetPhoto2 from "../cardItem/img/pet2.jpg";
import PetPhoto3 from "../cardItem/img/pet3.jpg";
import "./cards.css";

const CardItem = () => {
    return (
        <section className="card-section">
            <div className="card-wrapper">
                <img className="pet-img" src={PetPhoto} />
                <h2>Пропал кот</h2>
            </div>
            <div className="card-wrapper">
                <img className="pet-img" src={PetPhoto2} />
                <h2>Пропал кот</h2>
            </div>
            {/* <div className="card-wrapper">
                <img className="pet-img" src={PetPhoto3} />
                <h2>Пропал кот</h2>
            </div> */}
        </section>
    );
};

export default CardItem;
