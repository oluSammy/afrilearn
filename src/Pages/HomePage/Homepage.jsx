import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import PastQuestionsSection from '../../Components/PastQuestionsSection/PastQuestionsSection'
import Professional from '../../Components/Professional/Professional'

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Banner />
            <PastQuestionsSection />
            <Professional />
            <Footer />
        </div>
    )
}

export default Homepage
