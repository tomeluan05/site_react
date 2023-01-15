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



    </Layout>
  );
}

export default Home;
