import { Plus } from 'lucide-react';
import { IoSearchSharp } from 'react-icons/io5';
import tmdb from '../assets/tmdb.svg';

const Navbar = () => {
    return (
        <>
            {/* Top Nav */}
            <div className="w-full bg-[#032541] text-white">
                <div className="flex items-center justify-between h-[64px] max-w-[1220px] mx-auto px-4 text-[16px]"
                    style={{ fontFamily: 'Source Sans Pro, sans-serif', fontWeight: '600' }}>
                    <ul className="flex items-center gap-6">
                        <li>
                            <a href="#"><img className="w-[154px]" src={tmdb} alt="tmdb" /></a>
                        </li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                    <ul className="flex items-center gap-6">
                        <li><Plus size={20} /></li>
                        <li><span className="border px-2 py-1 rounded border-white">EN</span></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Join TMDB</a></li>
                        <li><IoSearchSharp size={25} color="#01b4e4" /></li>
                    </ul>
                </div>
            </div>

            {/* Sticky Search Bar */}
            <div className="sticky top-0 z-50 bg-white border-t border-gray-200">
                <div className="flex items-center gap-2 max-w-[1220px] h-[44px] mx-auto px-4">
                    <IoSearchSharp size={18} color="black" />
                    <input
                        type="text"
                        placeholder="Search for a movie, tv show, person..."
                        className="w-full text-black bg-white outline-none"
                        style={{
                            fontFamily: 'sans-serif',
                            fontStyle: 'italic',
                            fontWeight: 400
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
