import Layout from "../../layout";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <div class="row m-0 sessao1">
        <div class="col-md-12 m-0 p-0">
          <div
            id="carouselExampleCaptions"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <video className="video-sessao1"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://setima.cc/wp-content/themes/setima/videos/bg-video-new.mp4" type="video/mp4"></source>
                </video>
                <div class="carousel-caption legenda-sessao1 d-md-block">
                  <h1 className="gradient">Consultorias têm tentado ser criativas</h1>
                </div>
              </div>
              <div class="carousel-item">
              <video className="video-sessao1"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://setima.cc/wp-content/themes/setima/videos/bg-video-new.mp4" type="video/mp4"></source>
                </video>
                <div class="carousel-caption legenda-sessao1 d-md-block">
                  <h1 className="gradient">Agências querem ser analíticas</h1>
                </div>
              </div>
              <div class="carousel-item">
              <video className="video-sessao1"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src="https://setima.cc/wp-content/themes/setima/videos/bg-video-new.mp4" type="video/mp4"></source>
                </video>
                <div class="carousel-caption legenda-sessao1 d-md-block">
                  <h1 className="gradient">Produtoras só entram no final</h1>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span> */}
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span> */}
            </button>
          </div>
        </div>
      </div>
      <div />
      <div />

      {/* SESSÃO 2 */}
      <div class="row m-0 sessao2">
        <div class="col-md-12 m-0 p-0">
          <div className="div-section2">

          <video autoPlay muted loop playsInline className="back-video">
            <source src="https://setima.cc/wp-content/themes/setima/videos/stars.mp4" type="video/mp4">
            </source>
            
          </video>

          <div className="description">
            <h1 className="gradient">De ponta a ponta, de verdade</h1>
          <p>
            Distante da crise existencial que toma conta de agências tradicionais e consultorias, a Sétima não é nada disso, porque é a convergência perfeita entre agência, consultoria e produtora.
          </p>
          <p>
            Remixamos aquilo que de melhor existe em cada um desses universos e criamos novas formas de solucionar problemas que, além de gerar resultados a partir da soma de competências que antes só existiam isoladas, nos possibilita realizer entregas que vão, de verdade, de ponta a ponta.
          </p>
          </div>
          
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default Home;
