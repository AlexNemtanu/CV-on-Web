package ro.digitalnation.cvonweb;

import org.springframework.http.HttpStatus;
import ro.digitalnation.cvonweb.Model.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.digitalnation.cvonweb.Model.UserLogin;
import ro.digitalnation.cvonweb.repository.ProfileRepository;
import ro.digitalnation.cvonweb.Exception.ResourceNotFoundException;
import ro.digitalnation.cvonweb.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CvController {
    @Autowired
    private ProfileRepository profileRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserLogin user){

        if(userRepository.findByUsername(user.getUsername()) != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }
        user.setPasswordUser(bCryptPasswordEncoder.encode(user.getPasswordUser()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserLogin user){
        UserLogin storedUser = userRepository.findByUsername(user.getUsername());
        if(storedUser == null)
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        if(bCryptPasswordEncoder.matches(user.getPasswordUser(), storedUser.getPasswordUser())){
            return ResponseEntity.ok("Login successful");
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Measj");
        }

    }

    @GetMapping("/profiles")
    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }
    @GetMapping("/profiles/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable(value = "id") Long profileId)
            throws ResourceNotFoundException {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for this id :: " + profileId));
        return ResponseEntity.ok().body(profile);
    }

    @PostMapping("/profiles")
    public Profile createProfile(@RequestBody Profile profile) {
        return profileRepository.save(profile);
    }
    @PutMapping("/profiles/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable(value = "id") Long profileId,
                                                 @RequestBody Profile profileDetails) throws ResourceNotFoundException {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for this id :: " + profileId));

        profile.setEmailId(profileDetails.getEmailId());
        profile.setLastName(profileDetails.getLastName());
        profile.setFirstName(profileDetails.getFirstName());
        profile.setDescription(profileDetails.getDescription());
        final Profile updatedProfile = profileRepository.save(profile);
        return ResponseEntity.ok(updatedProfile);
    }

    @DeleteMapping("/profiles/{id}")
    public Map<String, Boolean> deleteProfile(@PathVariable(value = "id") Long profileId)
            throws ResourceNotFoundException {
        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new ResourceNotFoundException("profile not found for this id :: " + profileId));

        profileRepository.delete(profile);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


}