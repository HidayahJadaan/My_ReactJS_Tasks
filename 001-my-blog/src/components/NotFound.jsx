import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That Page Can't be Found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
