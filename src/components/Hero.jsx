import Button from "./Button";

const Hero = () => {
  return (
    <main className="flex max-w-[75rem] max-h-[80rem] mx-auto mt-20 bg-transparent-100">
      <div className="bg-transparent-300 max-w-[40rem]">
        <h1 className="font-extrabold text-8xl text-ctPur mb-9">
          YOUR FEET DESERVE <br></br>THE BEST
        </h1>
        <p className="font-semibold max-w-[25rem] text-ctYel mb-9">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        {/*Div for buttons */}
        <div className="mb-9">
          <Button
            marginX="40px"
            userheight="50px"
            userwidth="150px"
            userFont="24px"
          >
            Shop Now
          </Button>

          <Button userheight="50px" userwidth="150px" userFont="24px">
            Category
          </Button>
        </div>

        <div>
          <p className="mb-4 text-white">Also Available On</p>
          <div className="flex">
            <img src="public/images/flipkart.png" className="mr-10"></img>
            <img src="public/images/amazon.png"></img>
          </div>
        </div>
      </div>
      <div>
        <img src="public/images/shoe_image.png"></img>
      </div>
    </main>
  );
};

export default Hero;
