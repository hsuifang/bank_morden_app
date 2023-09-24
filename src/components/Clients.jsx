import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 flex-wrap ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] min-h-[60px] client-container`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
          <div className="w-full" />
          <div className="flex justify-center h-1 mt-5 client-container__line"></div>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
