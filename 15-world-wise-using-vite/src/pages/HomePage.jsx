import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function HomePage() {
  return (
    <div>

      <PageNav />
      <AppNav />
      <h1>HomePage</h1>

{/* We don't need this because it make the page re-loaded */}
{/* <a href="/pricing">Pricing</a> */}

<Link to="/pricing">Pricing</Link><br/>
<Link to="/app">Go to the app</Link>

    </div>
  )
}
