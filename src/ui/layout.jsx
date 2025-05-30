import Navbar from "./navbar"
import tmd from '../assets/themoviedb.svg';
import '../App.css'
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";


const Layout = () => {
    return (
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,900italic,900,700italic,700,600italic,600,400italic,300italic,300,200italic"
                    rel="stylesheet"
                    type="text/css"
                />

            </Helmet>
            <div style={{ fontFamily: 'Source Sans Pro', fontWeight: '600' }}>
                <Navbar />

                <main>
                    <Outlet />
                </main>
                <footer className="max-h-[100%] flex items-center justify-center py-[80px] h-[325px]">
                    <div>
                        <img className="w-[130px]" src={tmd} alt="TMDB" />
                        <p className="bg-white py-[8px] rounded-sm text-[19px] px-[16px] text-[#01b4e4]">JOIN THE COMMUNITY</p>
                    </div>
                    <div className="flex gap-8">
                        <div >
                            <h2 className="footer-title font-bold">The Basics</h2>
                            <ul className="">
                                <li><a href="#">About TMDB</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Support Forums</a></li>
                                <li><a href="#">API Documentation</a></li>
                                <li><a href="#">System Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-title">Get Involved</h2>
                            <ul>
                                <li><a href="#">Contribution Bible</a></li>
                                <li><a href="#">Add New Movie</a></li>
                                <li><a href="#">Add New TV Show</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-title">Community</h2>
                            <ul>
                                <li><a href="#">Guidelines</a></li>
                                <li><a href="#">Discussions</a></li>
                                <li><a href="#">Leaderboard</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-title">Legal</h2>
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">API Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">DMCA Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Layout