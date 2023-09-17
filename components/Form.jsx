import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

  const validateLink = (url) => {
    // Regular expression to match utfs.io links
    const utfsIoPattern = /^https:\/\/utfs\.io\/.+/;

    // Check if the URL matches the utfs.io pattern
    return utfsIoPattern.test(url);
  };

  const handleLinkChange = (e) => {
    const link = e.target.value;
    if (validateLink(link)) {
      setPost({ ...post, recipe: link });
    } else {
      // Display an error or handle invalid link
      alert("Invalid link! Please enter a valid utfs.io link.");
    }
  };
  
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Receitas</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} e compartilhe receitas incríveis com o mundo, nossa missão é
        tornar a culinária uma experiência mais rica e emocionante para todos.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Nome da Receita {` `}
          </span>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Escreva o nome da sua receita..."
            required
            className="form_input"
          ></input>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Sua Receita Culinária
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Escreva sua receita aqui..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Hashtag {` `}
            <span className="font-normal">(#massas, #pizza, #sushi)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          ></input>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Link da receita{" "}
            <span className="font-light">
              (entre{" "}
              <a
                href="https://upload-vinivent.vercel.app/"
                target="_blank"
                className="text-blue-700 font-bold hover:border-b border-blue-700"
              >
                aqui
              </a>{" "}
              para pegar o link da imagem)
            </span>
          </span>
          <input
            value={post.recipe}
            onChange={handleLinkChange}
            placeholder="Insira o link da receita"
            required
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Voltar
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-teal rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
