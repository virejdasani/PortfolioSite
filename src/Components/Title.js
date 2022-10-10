import "./title.css";

function Title() {
  return (
    <div>
      <div id="titleHead">
        <h1>Virej Dasani</h1>
        {/* <video playsinline="" autoplay="" muted="" loop="" class="hero__background-video hero__background-video--light">
        <source src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-dark.mp4?v=364d6351-2cdd-8622-b962-d429a0989974" type="video/mp4">
        Your browser does not support HTML5 video.
      </video> */}
        <video
          className="video-bg"
          autoPlay
          loop
          muted
          poster="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
        >
          <source
            src={
              "https://github.com/virejdasani/virejdasani.github.io/blob/master/dots-moving-video-bg-dark.mp4?raw=true"
            }
            type="video/mp4"
          />
        </video>
        <h3 id="tagline">
          I code{" "}
          <span className="taglineHighlights">apps, games, websites</span> then{" "}
          <span className="taglineHighlights">make videos about it 👇</span>
        </h3>
        <iframe
          style={{ borderRadius: "15px", marginTop: "30px" }}
          title="Virej Dasani"
          src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UURzS48bskynAxoI38BFypfQ"
          width={window.innerWidth > 560 ? "560" : "280"}
          height={window.innerWidth > 560 ? "315" : "157.5"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        {/* <div className="buttonTopMargin"></div>
        <div id="titleButtons">
          <a href="#skills">
            <button className="bn632-hover bn25">Skills</button>
          </a>
          <a href="#projects">
            <button className="bn632-hover bn25">Projects</button>
          </a>
          <a href="#honours">
            <button className="bn632-hover bn25">Honours</button>
          </a>
          <a href="#contact">
            <button className="bn632-hover bn25">Contact</button>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Title;
