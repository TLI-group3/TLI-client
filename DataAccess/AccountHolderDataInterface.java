import java.util.Collection;

/**
 * This is the Data Access Interface for the data of the bank's account holders
 */
public interface AccountHolderDataInterface {
    /*
    Get the ID of the client, which is an account holder.
     */
    AccountHolder getClientByID(String ID);

    Collection<AccountHolder> getAllClients();
}
