package ro.digitalnation.cvonweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.digitalnation.cvonweb.Model.UserLogin;

public interface UserRepository extends JpaRepository<UserLogin, Long> {
    UserLogin findByUsername(String username);
}
