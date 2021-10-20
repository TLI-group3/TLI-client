import java.io.*;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.util.HashMap;

// Not calling any API due to
public class CarDataReader implements DataReader{
    @Override
    public CarList loadCarData(String price_range) throws IOException, ClassNotFoundException{
        CarList cars = new CarList();
        // create a client
        var client = HttpClient.newHttpClient();

        // create a request
        var request = HttpRequest.newBuilder(
                        URI.create("[URL_OF_API]"))
                .header("accept", "application/json")
                .build();

        // use the client to send the request or multiple
        var response = client.send(request, new JsonBodyHandler<> (Car.class)); // , new "Type of Data"<>(Car.class)

        // the response (will change depending on dataset or API):
        Car new_car = Car(response.body().get().title);
        cars.add(new_car);
        return cars;

    }
}
