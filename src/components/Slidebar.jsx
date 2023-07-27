import { motion } from 'framer-motion';
import '../App.css';
import { TeamOutlined, SettingOutlined } from '@ant-design/icons';
const Slidebar = ({ children }) => {
  return (
    <>
      <div className="main-character">
        <motion.div animate={{ width: '200px' }} className="sidebar">
          <nav className="nav-div">
            <ul className="side-nav-list">
              <div className="brt-2">
                <li>
                  <a href="#" className="side-nav-link btn-2">
                    <TeamOutlined /> <span>Setting</span>
                  </a>
                </li>
              </div>
              <div className="brn-2">
                <li>
                  <a href="#" className="side-nav-link btn-2">
                    <TeamOutlined /> <span>Login</span>
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#" className="side-nav-link btn-2">
                    <SettingOutlined /> <span>Setting</span>
                  </a>
                </li>
              </div>
              <div className="brn-2">
                <li>
                  <a href="#" className="side-nav-link btn-2">
                    <TeamOutlined /> <span>Setting</span>
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </motion.div>
        {/* <main>{Children}</main> */}
      </div>
    </>
  );
};

export default Slidebar;
