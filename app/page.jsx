import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubra & Compartilhe{" "}
        <br className="max-md:hidden flex" />
        <span className="teal_gradient text-center">Receitas Deliciosas</span>
      </h1>
      <p className="desc text-center">
        O Prato Fácil é um blog com o foco em compartilhar e ajudar pessoas a se
        apaixonarem pela culinária
      </p>
      <Feed />
    </section>
  );
};

export default Home;
