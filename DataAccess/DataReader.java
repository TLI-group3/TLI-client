import java.io.IOException;

public interface DataReader {
    CarList loadCarData(String price_range) throws IOException, ClassNotFoundException;
}
