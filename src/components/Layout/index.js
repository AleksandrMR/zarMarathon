
import style from "./style.layout.css"
import * as url from "url";

const Layout = ({ title, descr, urlBg = false, colorBg = false }) => {
    const styleRoot = colorBg ? { background: "#e2e2e2" } : {};

    return (
        <>
            <section className="root" style={ styleRoot } >
                <div className="wrapper">
                    <article>
                        <div className="title">
                            <h3>{ title }</h3>
                            <span className="separator"></span>
                        </div>
                        <div className="desc full">
                            <p>{ descr }</p>
                        </div>
                        <div>
                            <img src={ urlBg }/>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Layout;