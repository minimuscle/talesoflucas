/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/
import { Link, Outlet } from "@remix-run/react"

/******************************************************************
 *  CONSTS                                                        *
 ******************************************************************/
import "./_layout.scss"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Layout() {
  /*****  RENDER HELPERS  *****/
  function renderHeader() {
    return (
      <div className="Header">
        <Link to="/">
          <h1>Tales of Lucas</h1>
        </Link>
        <div className="Header__Group">
          <Link to="/browse">Browse</Link>
          <Link to="/write">Write</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    )
  }

  function renderFooter() {
    return (
      <div className="Footer">
        <Link to="/">
          <h1>Tales of Lucas - Footer</h1>
        </Link>
        <div className="Header__Group">
          <Link to="/browse">Browse</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    )
  }

  /*********  RENDER  *********/
  return (
    <div className="Container">
      {renderHeader()}
      <div className="Body">
        <Outlet />
      </div>
      {renderFooter()}
    </div>
  )
}
