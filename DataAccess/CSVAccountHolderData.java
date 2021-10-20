import java.io.*;
import java.util.Collection;
import java.util.HashMap;
import java.util.Scanner;

public class CSVAccountHolderData implements AccountHolderDataInterface {
    private HashMap<String, AccountHolder> accountHolders;

    public CSVAccountHolderData() {
        this.accountHolders = new HashMap();
    }

    @Override
    public AccountHolder getClientByID(String ID) {
        if (accountHolders.containsKey(ID)){
            return accountHolders.get(ID);
        }
        return null;
    }

    @Override
    public Collection<AccountHolder> getAllClients() {
        return accountHolders.values();
    }

    public void bankingReader() {
        // TODO Finish the body of this method.
        FileReader fr = null;
        try {
            fr = new FileReader
                    ("/Users/annguyen-trinh/OneDrive - University of Toronto/2nd Year/CSC207 Coding Files/Project/100_BT_Records.csv");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        BufferedReader csvReader = new BufferedReader(fr);

        String row = null;
        try {
            row = csvReader.readLine();
            row = csvReader.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }

        String[] data = row.split(",");

        try {
            csvReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            fr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        AccountHolder account = new AccountHolder("1");

        this.accountHolders.put("1", account);
    }

    public static void main(String[] args) {
       CSVAccountHolderData tester = new CSVAccountHolderData();
       tester.bankingReader();
       AccountHolder acc = tester.getClientByID("1");

       System.out.println(acc.getName());
    }
}
