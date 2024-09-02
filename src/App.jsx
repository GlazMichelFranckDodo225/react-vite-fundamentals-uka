const App = () => {
  // const status = true;
  const status = false;

  if (status) {
    return (
      <div>
        <h1>Login Status</h1>
        <button>Logout</button>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Login Status</h1>
        <button>Login</button>
      </div>
    )
  }
}

export default App
