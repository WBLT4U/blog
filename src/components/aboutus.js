//Handle button click
function AboutUs() {
  //Render
  
  return (
    <section className="form-container">
    <form 
    onSubmit={(event) => {
      event.preveantDefault();
      const { name, email, tel } = event.target.elements;
      console.log(username.value, password.value);
      alert(
        `Hello ${name.value}! Your email is ${email.value} and your tel is ${tel.value}`
        );
    }}>
      <input type="text" placeholder="Enter your Username" name="username"/>
      <input type="password" placeholder="Enter your Password" name="password" />
      
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}
export default AboutUs;
