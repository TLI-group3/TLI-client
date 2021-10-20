package DataAccess;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Collection;
import java.util.HashMap;

public class CSVAccountHolderData implements AccountHolderDataInterface {
    private HashMap<String, AccountHolder> accountHolders;

    @Override
    public AccountHolder getClientbyID(String ID) {
        if (accountHolders.containsKey(ID)){
            return accountHolders.get(ID);
        }
        return null;
    }

    @Override
    public Collection<AccountHolder> getAllClients() {
        return accountHolders.values();
    }

    private void bankingReader() {
        HashMap accounts = new HashMap();

        // TODO Finish the body of this method.
        FileReader fr = new FileReader("100_BT_Records.csv");
        BufferedReader csvReader = new BufferedReader(fr);

        this.accountHolders = accounts;
    }
//    String[] bankingReader(){
//        FileReader fr = new FileReader("100_BT_Records.csv");
//        BufferedReader csvReader = new BufferedReader(fr);
//
//
//        String row = csvReader.readLine();
//        while (row != null) {
//            String[] data = row.split(",");
//
//            row = csvReader.readLine();
//        }
//        csvReader.close();
//        fr.close();
//
//        return dat;
//    }
}
