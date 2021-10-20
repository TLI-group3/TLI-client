import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class AccountHolderData {
    String[] bankingReader(){
        FileReader fr = new FileReader("100 BT Records.csv");
        BufferedReader csvReader = new BufferedReader(fr);
        

        String row = csvReader.readLine();
        while (row != null) {
            String[] data = row.split(",");

            row = csvReader.readLine();
        }
        csvReader.close();
        fr.close();

        return dat;
    }
}
