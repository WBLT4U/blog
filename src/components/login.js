//Handle button click
function LogIn() {
  //Render
  
  return (
    <section className="form-container">
    <form 
    onSubmit={(event) => {
      event.preventDefault();
      const { username, password } = event.target.elements;
      console.log(username.value, password.value);
      alert(
        `Hello ${username.value}! You are welcome to our Blog`
        );
    }}>
      <input type="text" placeholder="Enter your Username" name="username"/>
      <input type="password" placeholder="Enter your Password" name="password" />
      
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}
export default LogIn;
