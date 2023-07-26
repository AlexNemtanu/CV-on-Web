package ro.digitalnation.cvonweb.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long Id;
    public String username;
    public String passwordUser;

    public UserLogin(Long Id, String username, String passwordUser) {
        this.Id = Id;
        this.username = username;
        this.passwordUser = passwordUser;
    }

    public UserLogin() {
    }


    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordUser() {
        return passwordUser;
    }

    public void setPasswordUser(String passwordUser) {
        this.passwordUser = passwordUser;
    }

}
