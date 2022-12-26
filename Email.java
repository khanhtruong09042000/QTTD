import java.util.Properties;
import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email {

   private static String userId = "";
    private static String password = "";
    
     public void SendEmailToUSer(String userid, String Password, String fromAddress, String toAddress, String mailSubject, String mailBody) throws AddressException, MessagingException {
        userId = userid;
        password = Password;
        String to = toAddress;
        String from = fromAddress;
        String host = "smtp.gmail.com";
        Properties props = System.getProperties();
        props.setProperty("mail.smtp.host", host);
        props.setProperty("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.port", "587");
        Session session = Session.getInstance((Properties)props, (Authenticator)new Authenticator(){

            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(userId, password);
            }
        });
        MimeMessage message = new MimeMessage(session);
        message.setFrom((Address)new InternetAddress(from));
        message.addRecipient(Message.RecipientType.TO, (Address)new InternetAddress(to));
        message.setSubject(mailSubject);
        String body = "" + mailBody + ".";
        message.setContent((Object)body, "text/html");
        Transport.send((Message)message);
        System.out.println("Sent message successfully....");
    }
}