package dra.moviesearcher.scrapping;

public class Scrapping {

    public String tomatometer;
    public String audienceScore;

    public Scrapping(String tomatometer, String audienceScore) {
        this.tomatometer = tomatometer;
        this.audienceScore = audienceScore;
    }

    public String getTomatometer() {
        return tomatometer;
    }

    public void setTomatometer(String tomatometer) {
        this.tomatometer = tomatometer;
    }

    public String getAudienceScore() {
        return audienceScore;
    }

    public void setAudienceScore(String audienceScore) {
        this.audienceScore = audienceScore;
    }

    @Override
    public String toString() {
        return "Scrapping{" +
                "tomatometer='" + tomatometer + '\'' +
                ", audienceScore='" + audienceScore + '\'' +
                '}';
    }

    public Scrapping() {
    }

}
