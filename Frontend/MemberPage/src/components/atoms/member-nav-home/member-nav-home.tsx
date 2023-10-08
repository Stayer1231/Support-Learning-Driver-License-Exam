import { Link as Forward } from 'react-router-dom';
import { Link } from 'react-scroll';
import './member-nav-home.scss'

function MemberNavHome() {

    return (
        <>
            <div className='guest-nav-home-container'>
                <nav>
                    <ul>
                        <div className='nav-home-items'>
                            <Link to="center-introduction" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className='inline-block'>
                                    <a href="">Trang chủ</a>
                                </li>
                            </Link>
                        </div>
                        <div className='nav-home-items'>
                            <Link to="course-section" spy={true} smooth={true} offset={-100} duration={500}>
                                <li className='inline-block'>
                                    <a href="">Khoá học</a>
                                </li>
                            </Link>
                        </div>
                        <div className='nav-home-items'>
                            <Link to="news-section" spy={true} smooth={true} offset={-120} duration={500}>
                                <li className='inline-block'>
                                    <a href="">Tin tức</a>
                                </li>
                            </Link>
                        </div>
                        <div className='nav-home-items'>
                            <Forward to='/thithu'>
                                <li className='inline-block'>
                                    <a href="">Thi thử</a>
                                </li>
                            </Forward>
                        </div>
                    </ul>

                    <img src="src/imgs/member/member_img.png" alt="member-img" className='member-home-avatar' />
                    <Link to="center-introduction" spy={true} smooth={true} offset={-100} duration={500}>
                        <img src='src/imgs/logo.png' alt='logo-img' className='logo-home' />
                    </Link>
                </nav>

            </div>

        </>
    )
}

export default MemberNavHome