<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
    <script src="login.js"></script>
  </head>
  <body>
    <h1>Login</h1>
    <form id="login-form">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <div id="error"></div>
  </body>
</html>



