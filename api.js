import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

public class JavaGetRequest {

    private static HttpURLConnection con;

    public static void main(String[] args) throws MalformedURLException,
            ProtocolException, IOException {

        String url = "https://api2.isbndb.com/book/9781934759486";

        try {

            URL myurl = new URL(url);
            con = (HttpURLConnection) myurl.openConnection();
            con.setRequestProperty("Content-Type", "application/json");
            con.setRequestProperty("Authorization": "YOUR_REST_KEY");
            con.setRequestMethod("GET");

            StringBuilder content;

            try (BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()))) {

                String line;
                content = new StringBuilder();

                while ((line = in.readLine()) != null) {
                    content.append(line);
                    content.append(System.lineSeparator());
                }
            }

            System.out.println(content.toString());

        } finally {

            con.disconnect();
        }
    }
}
