import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>

{/* We don't need this because it make the page re-loaded */}
{/* <a href="/pricing">Pricing</a> */}

<Link to="/pricing">Pricing</Link>
    </div>
  )
}
