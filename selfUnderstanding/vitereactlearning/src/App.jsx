function MyViteform() {
  return (
    <div>
       <h2>User Registration Form</h2>
    <form onSubmit={(e) => { e.preventDefault(); console.log("Form submitted!"); }}>
        <div className="form-group"> {/* 'class' becomes 'className' */}
            <label htmlFor="fullname">Full Name:</label> {/* 'for' becomes 'htmlFor' */}
            <input type="text" id="fullname" name="fullname" required placeholder="Enter your full name" />
        </div>

        
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
        </div>

        
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required placeholder="Create a password" />
        </div>

        
        <div className="form-group">
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
            
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
        </div>

        
        <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country">
                <option value="">Select your country</option>
                <option value="usa">United States</option>
                <option value="india">India</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
            </select>
        </div>

        
        <div className="form-group">
            <label>Interests:</label>
            <input type="checkbox" id="coding" name="interests" value="coding" />
            <label htmlFor="coding">Coding</label>
            
            <input type="checkbox" id="sports" name="interests" value="sports" />
            <label htmlFor="sports">Sports</label>
            
            <input type="checkbox" id="music" name="interests" value="music" />
            <label htmlFor="music">Music</label>
        </div>

        
        <div className="form-group">
            <label htmlFor="birthdate">Date of Birth:</label>
            <input type="date" id="birthdate" name="birthdate" />
        </div>

        
        <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message here..."></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="profile-pic">Upload Profile Picture:</label>
            <input type="file" id="profile-pic" name="profile-pic" />
        </div>

        \
        <button type="submit">Register</button>
        
        
        <button type="reset">Clear Form</button>
    </form>
    </div>
  )
}

export default MyViteform;