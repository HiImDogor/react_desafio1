const Header = () => {
  const styles = {
    backgroundImage: 'url("/bg-header.jpg")', // pon la imagen del apoyo hito 1 en /public
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "240px",
  };

  return (
    <header
      className="text-white d-flex align-items-center justify-content-center"
      style={styles}
    >
      <div className="bg-dark bg-opacity-50 p-4 rounded-3 text-center">
        <h1 className="display-6 fw-bold m-0">¡Pizzería Mamma Mía!</h1>
        <p className="lead m-0">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;
