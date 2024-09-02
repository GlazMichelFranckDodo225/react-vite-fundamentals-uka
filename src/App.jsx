const App = () => {
  const city = ['Paris', 'Marseille', 'Lyon', 'Grenoble'];

  return (
    <div>
      <ul>
        {
          city.map(
            (item, i) => <li key={i.toString}>{item}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App
