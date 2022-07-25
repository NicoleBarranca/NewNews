export default function Navigation() {
  return (
    <div className="navBar">
      <h1>
        New<span>News</span>
      </h1>
      <form>
        <input id="search" placeholder="Find articles.."></input>
        <button id="searchBtn">Search</button>
        <button id="resetBtn">Reset</button>
      </form>
    </div>
  );
}
