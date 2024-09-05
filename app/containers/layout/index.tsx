/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/
import { Outlet } from "@remix-run/react"

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
    return <div className="header">Header</div>
  }

  function renderFooter() {
    return <div>Footer</div>
  }

  /*********  RENDER  *********/
  return (
    <>
      {renderHeader()}
      <Outlet />
      {renderFooter()}
    </>
  )
}
