// index.js

const requestPromise = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const { Parser } = require("json2csv");
const request = require("request");

const URLS = [
  {
    id: "the_godfather",
    url: "https://www.imdb.com/title/tt0068646/?ref_=fn_al_tt_1",
  },
  {
    id: "the_godfather_2",
    url: "https://m.imdb.com/title/tt0071562/?ref_=tt_sims_tt_t_1",
  },
];

(async () => {
  let moviesParseData = [];
  for (let movieUrl of URLS) {
    const response = await requestPromise({
      uri: movieUrl.url,
      headers: {
        "accept":
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-IN,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "Android",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "sec-gpc": "1",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36",
      },
      gzip: true,
    });

    let $ = cheerio.load(response);

    // console.log(response);

    let title = $("section.ipc-page-section > div > div > h1").text().trim();
    let rating = $("div.ipc-button__text > div > div:nth-child(2) > div > span")
      .text()
      .slice(0, 6);
    let imagePoster = $("div.ipc-media > img.ipc-image").attr("src");
    let ratingAmount = $(
      "div.ipc-button__text > div:last-child > div:last-child > div:last-child"
    )
      .text()
      .slice(0, 4);
    let releaseYear = $("li.ipc-inline-list__item > a").text().slice(0, 4);
    let moviesGenres = [];
    let movieGenresData = $(
      'li[data-testid="storyline-genres"] a[href^="/search/title/?genres"]'
    );
    let moviePlot = $(
      "#__next > main > div.ipc-page-content-container.ipc-page-content-container--full.BaseLayout__NextPageContentContainer-sc-180q5jf-0.fWxmdE > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-kvkd64-2.kmTkgc > div.Hero__ContentContainer-kvkd64-10.eaUohq > div.Hero__MetaContainer__Video-kvkd64-4.kNqsIK > div.GenresAndPlot__ContentParent-cum89p-8.bFvaWW.Hero__GenresAndPlotContainer-kvkd64-11.twqaW > p > span.GenresAndPlot__TextContainerBreakpointL-cum89p-1.gwuUFD"
    )
      .text()
      .trim();
    movieGenresData.each((i, elm) => {
      let genre = $(elm).text();
      moviesGenres.push(genre);
    });

    moviesParseData.push({
      title,
      rating,
      imagePoster,
      ratingAmount,
      releaseYear,
      moviesGenres,
    });

    console.log(
      `
      Title ="${title}"
      Movie rating = ${rating}
      Movie genres = ${moviesGenres}
      Total rating amount = ${ratingAmount}
      Release year = ${releaseYear}
      Image source = ${imagePoster}
      `
    );
    console.log(moviePlot);
    let imageExtractFile = fs.createWriteStream(`${movieUrl.id}.jpg`);

    await new Promise((resolve, reject) => {
      let streamImage = request({
        url: imagePoster,
        headers: {
          "accept":
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-IN,en-US;q=0.9,en;q=0.8",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": "Android",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "sec-gpc": "1",
          "upgrade-insecure-requests": "1",
          "user-agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36",
        },
        gzip: true,
      })
        .pipe(imageExtractFile)
        .on("finish", () => {
          console.log(`Movie Poster Image of ${movieUrl.id} is downloaded`);
          resolve();
        })
        .on("error", (err) => {
          console.log(err);
          reject(error);
        })
    }).catch((err) => {
      console.log(`${movieUrl.id} image download error ${err}`);
    });
  }

  const csvDataKeys = ["title", "rating", "imagePoster", "ratingAmount"];

  const json2csvParser = new Parser({
    fields: csvDataKeys,
  });
  const csv = json2csvParser.parse(moviesParseData);

  fs.writeFileSync("movies.csv", csv, "utf-8");
  console.log(csv);
})();
