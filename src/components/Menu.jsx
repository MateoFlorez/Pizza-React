import Card from "./Card";

function Menu() {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex -mx-2 flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 px-2">
          <Card
            photo="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale"
            name="Peperoni"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2">
          <Card
            photo="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pizza-111-variedades-queso-1522235912.jpg"
            name="Cheese"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2">
          <Card
            photo="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale"
            name="Peperoni"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
