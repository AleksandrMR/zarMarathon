import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg3 from "../src/img/bg3.jpg"

const App = () => {
    return (
        <>
            <Header
                title = "This is Header Title!"
                descr = "This is Header Description!"
            />
            <Layout
                title="Layout Title"
                descr = "Layout Description"
                urlBg={ bg3 }
            />
            <Layout
                title="Layout Title"
                descr = "Layout Description"
                colorBg
            />
            <Layout
                title="Layout Title"
                descr = "Layout Description"
                urlBg={ bg3 }
            />
            <Footer

            />
        </>
    )
}

export default App;
