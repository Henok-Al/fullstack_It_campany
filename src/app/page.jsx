import Head from "next/head";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "We design and develop beautiful, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "From iOS to Android, we build mobile apps that deliver seamless user experiences and drive business growth.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing for scalability, security, and efficiency with our cloud solutions.",
  },
];

const Landing = () => {
  return (
    <div>
      <Head>
        <title>IT Solutions Company</title>
      </Head>
      <br />
      <br />
      <br />

      <header className="container mx-auto px-4 gap-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              IT Solutions for Your Business
            </h1>
            <p className=" mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              auctor, urna sed hendrerit mollis, metus nunc luctus ex, in
              dignissim urna lacus et eros.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              <Link href="/home">Get Started</Link>
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src="./land1.jpg"
              alt="Landing"
              className="rounded-lg shadow-lg"
              width={500}
              height={400}
            />
          </div>
        </div>
      </header>

      <main className=" p-12    ">
        <div className=" mx-auto  ">
          <div className="text-3xl font-semibold text-center">Our Services</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
            {services.map((service, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p >{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-#52576D-800 text-white p-12 flex flex-col items-center justify-center">
  <div className=" px-4 text-center">
    <h1 className="font text-lg">Get In Touch With Us</h1>
  </div>

  <div className="my-4">
    <img src="./lang2.png" width={500} alt="" />
  </div>

  <div className="mt-4">
    <button>
      <Link
        href="/contact"
        className="bg-blue-500 hover:bg-blue text-white font-bold py-2 px-6 rounded"
      >
        Contact Us
      </Link>
    </button>
  </div>
</footer>



    </div>
  );
};

export default Landing;
