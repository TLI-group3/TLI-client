import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;


public class CarList implements Serializable{
    private final Map<String, Car> cars = new HashMap<>();

    /**
     * Add car to this car list.
     * @param car the user to add
     */
    public void add(Car car) {
        cars.put(car.getModel(), car);
    }


}
