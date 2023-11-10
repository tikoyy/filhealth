import React, { useEffect, useState } from "react";

//import '../App.css';
import NavMenu from "../components/NavMenu";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OthersFooter from "../components/OthersFooter";
import { Grid } from "@mui/material";
import { Article, getArticles } from "../services/articles";

const appStyle = {
  backgroundImage: "url(https://www.philhealth.gov.ph/images/bg_green.jpg)",
};

function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  console.log(articles.length);

  useEffect(() => {
    getArticles().then((articles) => setArticles(articles));
  }, []);

  return (
    <div className="App" style={appStyle}>
      <div>
        <NavMenu />
      </div>
      <div>
        <ImageCarousel />
      </div>
      <div>
        <OthersFooter />
      </div>
      <div>
        <Grid container>
          {articles.map((article) => {
            return (
              <Hero
                imgURL={article.imgURL}
                title={article.title}
                body={article.body}
              />
            );
          })}
        </Grid>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
