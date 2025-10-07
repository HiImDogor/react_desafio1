import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  if (loading) return <p className="text-center mt-5">Cargando pizzas...</p>;
  if (error)
    return <p className="text-center mt-5 text-danger">Error: {error}</p>;

  return (
    <>
      <Header />
      <main className="container-fluid my-4 px-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {pizzas.map((p) => (
            <CardPizza
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              ingredients={p.ingredients}
              img={p.img}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
