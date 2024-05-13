//Handle button click
function SignUp() {
  //Render
  
  return (
    <section className="form-container">
    <form 
    onSubmit={(event) => {
      event.preveantDefault();
      const { name, email, tel, username, password } = event.target.elements;
      console.log(name.value, email.value, tel.value, username.value, password.value);
      alert(
        `Hello ${name.value}! Your email is ${email.value} Your tel is ${tel.value}! Your username is ${username.value}! and your password is ${password.value}`
        );
    }}>
      <input type="text" placeholder="Enter your Full Name" name="name"/>
      <input type="text" placeholder="Enter your Email" name="email" />
      <input type="text" placeholder="Enter your Phone" name="tel" />
      <input type="text" placeholder="Enter your Username" name="username" />
      <input type="text" placeholder="Enter your Password" name="password" />
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}
export default SignUp;