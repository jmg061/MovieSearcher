package dra.moviesearcher.scrapping;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

@Component("scrappingService")
public class ScrappingService {
    public Scrapping getScrapping(String url) {
        try{
            Scrapping scrapping = new Scrapping();
            
            Playwright playwright = Playwright.create();
            Browser browser = playwright.webkit().launch();
            Page page = browser.newPage();
            page.navigate(url);
            //page.waitForSelector("#modules-wrap > div.media-scorecard.no-border > media-scorecard > rt-button:nth-child(3)");
            page.waitForSelector("div.media-scorecard > div > div.scorecard-wrap");
            Document webpage = Jsoup.parse(page.content());
            Elements tomatometer = webpage.select("#modules-wrap > div.media-scorecard.no-border > media-scorecard > rt-button:nth-child(3) > rt-text");
            Elements audienceScore = webpage.select("#modules-wrap > div.media-scorecard.no-border > media-scorecard > rt-button:nth-child(7) > rt-text");

            scrapping.setTomatometer(tomatometer.text());
            scrapping.setAudienceScore(audienceScore.text());
            
            return scrapping;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
