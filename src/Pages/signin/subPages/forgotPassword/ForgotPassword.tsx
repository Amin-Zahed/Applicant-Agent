const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
