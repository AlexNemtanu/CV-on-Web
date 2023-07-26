package ro.digitalnation.cvonweb.repository;

import ro.digitalnation.cvonweb.Model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
